import { In } from "typeorm";
import { Label } from "../entity/Label";

// Provide resolver functions for your schema fields
export const labelResolver = {
  Query: {
    getLabelsByIds: async (_: any, args: any) => {
      console.log("IN LABEL RESOLVER");
      const { ids } = args;
      console.log(JSON.stringify(ids, null, 2));
      return await Label.find({ where: { id: In(ids) } });
    },
  },
};
