import { Label } from "../entity/Label";
import { Setting } from "../entity/Setting";

// Provide resolver functions for your schema fields
export const settingResolver = {
  Query: {
    getSettingsByBookId: async (_: any, args: any) => {
      return await Setting.find();
    },
    getSettingById: async (_: any, args: any) => {
      return await Setting.find();
    },
  },
  Mutation: {
    addSetting: async (_: any, args: any) => {
      const { name, description, labels } = args;
      try {
        const label = Label.create({
          label: name,
        });

        const setting = Setting.create({
          name,
          description,
          label,
        });

        await setting.save();

        return true;
      } catch (error) {
        return false;
      }
    },
  },
};