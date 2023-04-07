"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initial1678065417183 = void 0;
class initial1678065417183 {
    constructor() {
        this.name = 'initial1678065417183';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "book" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "author" character varying NOT NULL, "summary" character varying NOT NULL, CONSTRAINT "PK_a3afef72ec8f80e6e5c310b28a4" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "book"`);
    }
}
exports.initial1678065417183 = initial1678065417183;
