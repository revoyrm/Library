import { MigrationInterface, QueryRunner } from "typeorm";

export class otherTables1678646742829 implements MigrationInterface {
    name = 'otherTables1678646742829'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "character" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "labels" character varying array, CONSTRAINT "PK_6c4aec48c564968be15078b8ae5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chapter" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "labels" character varying array, CONSTRAINT "PK_275bd1c62bed7dff839680614ca" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "setting" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "labels" character varying array, CONSTRAINT "PK_fcb21187dc6094e24a48f677bed" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "note" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "note" character varying NOT NULL, "labels" character varying array, CONSTRAINT "PK_96d0c172a4fba276b1bbed43058" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "note"`);
        await queryRunner.query(`DROP TABLE "setting"`);
        await queryRunner.query(`DROP TABLE "chapter"`);
        await queryRunner.query(`DROP TABLE "character"`);
    }

}
