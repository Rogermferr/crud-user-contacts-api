import { MigrationInterface, QueryRunner } from "typeorm";

export class EditContactsTelephone1690252398400 implements MigrationInterface {
    name = 'EditContactsTelephone1690252398400'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_aacbcbfc16077f6b485951adfb4" UNIQUE ("telephone")`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46" UNIQUE ("telephone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "UQ_64587cae6751ad9fe10a21b3a46"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_aacbcbfc16077f6b485951adfb4"`);
    }

}
