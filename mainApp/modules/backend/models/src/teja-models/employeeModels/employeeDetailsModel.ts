import {Column,Entity} from 'typeorm'
import { BaseModel } from '../../BaseModel'

@Entity({schema:'employee'})

export default class EmployeeDetails extends BaseModel{

    @Column({nullable:true})
    public firstName:string

    @Column({nullable:true})
    public lastName:string

    @Column({nullable:true})
    public phoneNumber:number;

    @Column({nullable:true})
    public email:string;

    @Column({nullable:true})
    public dob:string
}