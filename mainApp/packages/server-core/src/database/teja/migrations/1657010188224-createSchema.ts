import { MigrationInterface, QueryRunner } from "typeorm";

export class createSchema1657010188224 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS customer`)
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS employee`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
