import { MigrationInterface, QueryRunner } from "typeorm";

export class labelconnections1678654114433 implements MigrationInterface {
    name = 'labelconnections1678654114433'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "character" RENAME COLUMN "labels" TO "labelId"`);
        await queryRunner.query(`ALTER TABLE "setting" RENAME COLUMN "labels" TO "labelId"`);
        await queryRunner.query(`CREATE TABLE "label" ("id" SERIAL NOT NULL, "label" character varying NOT NULL, CONSTRAINT "PK_5692ac5348861d3776eb5843672" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "chapter" DROP COLUMN "labels"`);
        await queryRunner.query(`ALTER TABLE "note" DROP COLUMN "labels"`);
        await queryRunner.query(`ALTER TABLE "book" ADD "labelId" integer`);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "UQ_2304d00bfad373f647e125de33a" UNIQUE ("labelId")`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD "number" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD "labelId" integer`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD CONSTRAINT "UQ_dbf6d4424ca039182cd7dd1dba2" UNIQUE ("labelId")`);
        await queryRunner.query(`ALTER TABLE "character" DROP COLUMN "labelId"`);
        await queryRunner.query(`ALTER TABLE "character" ADD "labelId" integer`);
        await queryRunner.query(`ALTER TABLE "character" ADD CONSTRAINT "UQ_c81904a2bf17cab18e03d37b518" UNIQUE ("labelId")`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "labelId"`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "labelId" integer`);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "UQ_0c222348053649f75a0c7c83221" UNIQUE ("labelId")`);
        await queryRunner.query(`ALTER TABLE "book" ADD CONSTRAINT "FK_2304d00bfad373f647e125de33a" FOREIGN KEY ("labelId") REFERENCES "label"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "character" ADD CONSTRAINT "FK_c81904a2bf17cab18e03d37b518" FOREIGN KEY ("labelId") REFERENCES "label"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD CONSTRAINT "FK_dbf6d4424ca039182cd7dd1dba2" FOREIGN KEY ("labelId") REFERENCES "label"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_0c222348053649f75a0c7c83221" FOREIGN KEY ("labelId") REFERENCES "label"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_0c222348053649f75a0c7c83221"`);
        await queryRunner.query(`ALTER TABLE "chapter" DROP CONSTRAINT "FK_dbf6d4424ca039182cd7dd1dba2"`);
        await queryRunner.query(`ALTER TABLE "character" DROP CONSTRAINT "FK_c81904a2bf17cab18e03d37b518"`);
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "FK_2304d00bfad373f647e125de33a"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "UQ_0c222348053649f75a0c7c83221"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "labelId"`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "labelId" character varying array`);
        await queryRunner.query(`ALTER TABLE "character" DROP CONSTRAINT "UQ_c81904a2bf17cab18e03d37b518"`);
        await queryRunner.query(`ALTER TABLE "character" DROP COLUMN "labelId"`);
        await queryRunner.query(`ALTER TABLE "character" ADD "labelId" character varying array`);
        await queryRunner.query(`ALTER TABLE "chapter" DROP CONSTRAINT "UQ_dbf6d4424ca039182cd7dd1dba2"`);
        await queryRunner.query(`ALTER TABLE "chapter" DROP COLUMN "labelId"`);
        await queryRunner.query(`ALTER TABLE "chapter" DROP COLUMN "number"`);
        await queryRunner.query(`ALTER TABLE "book" DROP CONSTRAINT "UQ_2304d00bfad373f647e125de33a"`);
        await queryRunner.query(`ALTER TABLE "book" DROP COLUMN "labelId"`);
        await queryRunner.query(`ALTER TABLE "note" ADD "labels" character varying array`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD "labels" character varying array`);
        await queryRunner.query(`DROP TABLE "label"`);
        await queryRunner.query(`ALTER TABLE "setting" RENAME COLUMN "labelId" TO "labels"`);
        await queryRunner.query(`ALTER TABLE "character" RENAME COLUMN "labelId" TO "labels"`);
    }

}
