"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.settingResolver = void 0;
const Label_1 = require("../entity/Label");
const Setting_1 = require("../entity/Setting");
// Provide resolver functions for your schema fields
exports.settingResolver = {
    Query: {
        getSettingsByBookId: async (_, args) => {
            return await Setting_1.Setting.find();
        },
        getSettingById: async (_, args) => {
            return await Setting_1.Setting.find();
        },
    },
    Mutation: {
        addSetting: async (_, args) => {
            const { name, description, labels } = args;
            try {
                const label = Label_1.Label.create({
                    label: name,
                });
                const setting = Setting_1.Setting.create({
                    name,
                    description,
                    label,
                });
                await setting.save();
                return true;
            }
            catch (error) {
                return false;
            }
        },
    },
};
