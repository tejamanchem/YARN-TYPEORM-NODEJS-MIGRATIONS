import {Column,Entity,JoinColumn,OneToOne} from 'typeorm';
import { BaseModel } from '../../BaseModel';
import {EmployeeDetails} from './index'

@Entity({schema:'employee'})

export default class EmployeeProfessionalDetails extends BaseModel{

    @Column({nullable:true})
    public employeIdNumber:number;

    @Column({nullable:true})
    public employeStatus:Boolean;

    @Column({nullable:true})
    public employeSalary:number

    @Column({nullable:true})
    public employePosition:string;

    @OneToOne(()=>EmployeeDetails)
    @JoinColumn({name:'employeId'})
    public employeId: EmployeeDetails

    
}