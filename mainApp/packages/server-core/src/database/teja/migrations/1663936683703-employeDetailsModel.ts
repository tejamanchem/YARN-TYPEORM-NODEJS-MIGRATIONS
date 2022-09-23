import {MigrationInterface, QueryRunner} from "typeorm";

export class employeDetailsModel1663936683703 implements MigrationInterface {
    name = 'employeDetailsModel1663936683703'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee"."employee_details" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "firstName" character varying, "lastName" character varying, "phoneNumber" integer, "email" character varying, "dob" character varying, CONSTRAINT "PK_a0a0a4a5e5b63b1bf07b5f89c1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "employee"."employee_professional_details" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "employeIdNumber" integer, "employeStatus" boolean, "employeSalary" integer, "employePosition" character varying, "employeId" integer, CONSTRAINT "REL_53f0fbec691253927c372d777b" UNIQUE ("employeId"), CONSTRAINT "PK_fcdee2adc76f08617bb0b1da7c4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "employee"."employee_professional_details" ADD CONSTRAINT "FK_53f0fbec691253927c372d777bb" FOREIGN KEY ("employeId") REFERENCES "employee"."employee_details"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER SEQUENCE employee.employee_details_id_seq RESTART WITH 1234`);
        await queryRunner.query(`ALTER SEQUENCE employee.employee_professional_details_id_seq RESTART WITH 1234`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "employee"."employee_professional_details" DROP CONSTRAINT "FK_53f0fbec691253927c372d777bb"`);
        await queryRunner.query(`DROP TABLE "employee"."employee_professional_details"`);
        await queryRunner.query(`DROP TABLE "employee"."employee_details"`);
    }

}
