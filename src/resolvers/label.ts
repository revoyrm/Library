import { In } from "typeorm";
import { Label } from "../entity/Label";

// Provide resolver functions for your schema fields
export const chapterResolver = {
  Query: {
    getLabelsByIds: async (_: any, args: any) => {
      const { ids } = args;
      return await Label.find({ where: { id: In(ids) } });
    },
  },
};
