import { AppDataSource } from "../data-source";
import { Book } from "../entity/Book";
import { Label } from "../entity/Label";
import { Setting } from "../entity/Setting";

export const settingResolver = {
  Query: {
    getSettingsByBookId: async (_: any, args: any) => {
      const { bookId } = args;
      return await Setting.find({
        where: { book: { id: bookId } },
        relations: {
          book: true,
          label: true,
        },
      });
    },
    getSettingById: async (_: any, args: any) => {
      const { id } = args;
      return await Setting.findOne({
        where: { id },
        relations: {
          book: true,
          label: true,
        },
      });
    },
  },
  Mutation: {
    createSetting: async (_: any, args: any) => {
      const { bookId, name, description } = args;
      try {
        const book = await Book.findOne({
          where: { id: bookId },
          relations: {
            chapters: true,
          },
        });

        if (!book) return null;

        const label = new Label();
        label.label = name;
        await AppDataSource.manager.save(label);

        const setting = new Setting();
        setting.description = description;
        setting.name = name;
        setting.label = label;
        setting.book = book;
        const createdSetting = await AppDataSource.manager.save(setting);

        console.log(createdSetting);

        return createdSetting;
      } catch (error) {
        console.error(error);
        return null;
      }
    },
    deleteSetting: async (_: any, args: any) => {
      const { id } = args;
      try {
        const setting = await Setting.findOneBy({ id });
        // const label = await Label.findOneBy({ id: setting.label.id });
        if (setting) {
          await Setting.remove(setting);
        }

        // if (label) {
        //   console.log("Found label", label.label);
        //   await Label.remove(label);
        //   console.log("REMOVED LABEL");
        // }

        console.log(setting);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
    updateSetting: async (_: any, args: any) => {
      const { id, name, description, labelId } = args;
      try {
        Setting.update({ id }, { name, description });

        Label.update({ id: labelId }, { label: name });

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
};
