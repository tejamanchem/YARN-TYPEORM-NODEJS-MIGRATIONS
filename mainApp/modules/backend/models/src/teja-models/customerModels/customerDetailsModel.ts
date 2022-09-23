import { Column, Entity } from "typeorm";
import { BaseModel } from "../../BaseModel";

@Entity({ schema: 'customer' })

export default class CustomerDetails extends BaseModel {

    @Column({ nullable: true })
    public firstName: string;

    @Column({ nullable: true })
    public lastName: string;

    @Column({ nullable: true })
    public primaryNumber: string;

    @Column({ nullable: true })
    public dob: string;

    @Column({ nullable: true })
    public email: string;
}