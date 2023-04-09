import { In } from "typeorm";
import { Label } from "../entity/Label";

export const labelResolver = {
  Query: {
    getLabelsByIds: async (_: any, args: any) => {
      const { ids } = args;
      return await Label.find({ where: { id: In(ids) } });
    },
  },
};
