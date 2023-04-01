import { MigrationInterface, QueryRunner } from "typeorm";

export class connections1680391135434 implements MigrationInterface {
    name = 'connections1680391135434'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chapter" ADD "bookId" integer`);
        await queryRunner.query(`ALTER TABLE "character" ADD "bookId" integer`);
        await queryRunner.query(`ALTER TABLE "setting" ADD "bookId" integer`);
        await queryRunner.query(`ALTER TABLE "label" ADD "bookId" integer`);
        await queryRunner.query(`ALTER TABLE "label" ADD "chapterId" integer`);
        await queryRunner.query(`ALTER TABLE "label" ADD "characterId" integer`);
        await queryRunner.query(`ALTER TABLE "label" ADD "settingId" integer`);
        await queryRunner.query(`ALTER TABLE "chapter" ADD CONSTRAINT "FK_ec31fc72d948403c35b8cf289f0" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "character" ADD CONSTRAINT "FK_6d1832e07d01ebb5a9910592f24" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "setting" ADD CONSTRAINT "FK_6aa87e4340071bef33ca3e7c464" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "label" ADD CONSTRAINT "FK_dd6cd32192f6034ff878a5b4d17" FOREIGN KEY ("bookId") REFERENCES "book"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "label" ADD CONSTRAINT "FK_dd886af1f88f397e83748f0558f" FOREIGN KEY ("chapterId") REFERENCES "chapter"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "label" ADD CONSTRAINT "FK_fa7b43fc093090d76cf12476c25" FOREIGN KEY ("characterId") REFERENCES "character"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "label" ADD CONSTRAINT "FK_800bab14fdd4e8227a9e604cf36" FOREIGN KEY ("settingId") REFERENCES "setting"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "label" DROP CONSTRAINT "FK_800bab14fdd4e8227a9e604cf36"`);
        await queryRunner.query(`ALTER TABLE "label" DROP CONSTRAINT "FK_fa7b43fc093090d76cf12476c25"`);
        await queryRunner.query(`ALTER TABLE "label" DROP CONSTRAINT "FK_dd886af1f88f397e83748f0558f"`);
        await queryRunner.query(`ALTER TABLE "label" DROP CONSTRAINT "FK_dd6cd32192f6034ff878a5b4d17"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP CONSTRAINT "FK_6aa87e4340071bef33ca3e7c464"`);
        await queryRunner.query(`ALTER TABLE "character" DROP CONSTRAINT "FK_6d1832e07d01ebb5a9910592f24"`);
        await queryRunner.query(`ALTER TABLE "chapter" DROP CONSTRAINT "FK_ec31fc72d948403c35b8cf289f0"`);
        await queryRunner.query(`ALTER TABLE "label" DROP COLUMN "settingId"`);
        await queryRunner.query(`ALTER TABLE "label" DROP COLUMN "characterId"`);
        await queryRunner.query(`ALTER TABLE "label" DROP COLUMN "chapterId"`);
        await queryRunner.query(`ALTER TABLE "label" DROP COLUMN "bookId"`);
        await queryRunner.query(`ALTER TABLE "setting" DROP COLUMN "bookId"`);
        await queryRunner.query(`ALTER TABLE "character" DROP COLUMN "bookId"`);
        await queryRunner.query(`ALTER TABLE "chapter" DROP COLUMN "bookId"`);
    }

}
