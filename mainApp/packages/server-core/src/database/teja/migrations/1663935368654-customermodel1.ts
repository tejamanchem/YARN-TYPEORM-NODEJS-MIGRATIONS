import {MigrationInterface, QueryRunner} from "typeorm";

export class customermodel11663935368654 implements MigrationInterface {
    name = 'customermodel11663935368654'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer"."customer_details" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "firstName" character varying, "lastName" character varying, "primaryNumber" character varying, "dob" character varying, "email" character varying, CONSTRAINT "PK_ca144d4b855fe08c813815bb2a9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER SEQUENCE customer.customer_details_id_seq RESTART WITH 1234`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "customer"."customer_details"`);
    }

}
