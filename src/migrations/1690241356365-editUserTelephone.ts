import { MigrationInterface, QueryRunner } from "typeorm";

export class EditUserTelephone1690241356365 implements MigrationInterface {
    name = 'EditUserTelephone1690241356365'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_aacbcbfc16077f6b485951adfb4" UNIQUE ("telephone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_aacbcbfc16077f6b485951adfb4"`);
    }

}
