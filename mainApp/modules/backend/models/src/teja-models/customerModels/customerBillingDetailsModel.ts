import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseModel } from "../../BaseModel";
import { CustomerDetails } from './index'

@Entity({ schema: 'customer' })

export default class CustomerBillingDetails extends BaseModel {


    @Column({ nullable: true })
    public address1: string;

    @Column({ nullable: true })
    public address2: string;

    @Column({ nullable: true })
    public city: string

    @Column({ nullable: true })
    public state: string;

    @Column({ nullable: true })
    public country: string;

    @OneToOne(() => CustomerDetails, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'customerId' })
    public customerId: CustomerDetails
}