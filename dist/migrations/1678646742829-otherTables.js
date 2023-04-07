"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.otherTables1678646742829 = void 0;
class otherTables1678646742829 {
    constructor() {
        this.name = 'otherTables1678646742829';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "character" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "labels" character varying array, CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chapter" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "labels" character varying array, CONSTRAINT "PK_275bd1c62bed7dff839680614ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "setting" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "labels" character varying array, CONSTRAINT "PK_fcb21187dc6094e24a48f677bed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "note" character varying NOT NULL, "labels" character varying array, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TABLE "setting"`);
        await queryRunner.query(`DROP TABLE "chapter"`);
        await queryRunner.query(`DROP TABLE "character"`);
    }
}
exports.otherTables1678646742829 = otherTables1678646742829;
