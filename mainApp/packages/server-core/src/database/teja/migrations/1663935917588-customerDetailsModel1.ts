import {MigrationInterface, QueryRunner} from "typeorm";

export class customerDetailsModel11663935917588 implements MigrationInterface {
    name = 'customerDetailsModel11663935917588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "customer"."customer_billing_details" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "address1" character varying, "address2" character varying, "city" character varying, "state" character varying, "country" character varying, "customerId" integer, CONSTRAINT "REL_0cd4049f6ea8d8e6da94013131" UNIQUE ("customerId"), CONSTRAINT "PK_5d640819a59fc9e82296a9c5eaf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "customer"."customer_billing_details" ADD CONSTRAINT "FK_0cd4049f6ea8d8e6da940131312" FOREIGN KEY ("customerId") REFERENCES "customer"."customer_details"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customer"."customer_billing_details" DROP CONSTRAINT "FK_0cd4049f6ea8d8e6da940131312"`);
        await queryRunner.query(`DROP TABLE "customer"."customer_billing_details"`);
    }

}
