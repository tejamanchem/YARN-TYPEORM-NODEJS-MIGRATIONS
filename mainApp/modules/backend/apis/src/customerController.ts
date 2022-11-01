import { Logger, LoggerInterface } from "@teja/backend-core-module";
import { Body, Delete, Get, JsonController, Param, Post, Put, Res, Req, QueryParams } from "routing-controllers";
import { OpenAPI } from "routing-controllers-openapi";
import CustomerService from "./customerService";

class EnrollmentFilter {
    firstName: string;
    lastName?: string;
    email?: string;
    accountNumber?: string;
    enrollmentId?: string;
    usacApplicationId?: string;
    dob?: string;
}
const log: LoggerInterface = new Logger(__filename)
@JsonController('/api/customer')
@OpenAPI({})
export default class CustomerController {
    private customerService = new CustomerService()
    constructor() {

    }
    @Get()
    public async getCustomers(@Res() res: any) {
        log.info(`customer:Get - Fetching Customer Data`)
        try {
            let result = await this.customerService.getCustomers()
            if (result.error) {
                return res.status(result.status).json({ message: result.message })
            }
            return result.response
        }
        catch (error: any) {
            log.error(`Customer-Get : Error While fetching Customers data with error :${error}`)
            return { error: true, status: 500, message: error }
        }

    }


 

    @Post()
    public async addCustomer(@Body() body:EnrollmentFilter, @Req() req: any, @Res() res: any) {
        log.info(`customer-Post : Adding customer with given data`)
        try{
            let response = await this.customerService.addCustomer(body)
            if (response.error) {
                return res.status(response.status).json({ message: response.message })
            }
            return response.response
        }
        catch(error:any){
            log.error(`Customer-Post : Error While adding Customers data with error :${error}`)
            return { error: true, status: 500, message: error }
        }
       
    }

   

}

