import { Service } from "typedi";
import { Logger, LoggerInterface, getDBRepository, getOsEnv, IQueryResponse, toBool } from "@teja/backend-core-module";


const log: LoggerInterface = new Logger(__filename);
@Service()
export default class CustomerService {
  customerRepositry: any;
  constructor() {
    this.customerRepositry = getDBRepository(getOsEnv("TEJA_CONNECTION_NAME"), "CustomerDetails");
  }

  public async getCustomers(): Promise<IQueryResponse> {
    try {
      log.info(`Customer-Get : Fetching all customer data `)
      let customerData = await this.customerRepositry.find({})
      if (!customerData) {
        return { error: true, status: 404, message: `Customer Data Not Found` }
      }

      return { error: false, status: 200, response: customerData }

    }
    catch (error: any) {
      log.error(`Customer-getCustomers : Error While fetching customers data with error :${error}`)
      throw { error: true, status: 500, message: error }
    }

  }

  
  public async addCustomer(body: any): Promise<IQueryResponse> {
    log.info(`customer-addCustomer : Adding customer with given data`)
    try {
      let result = await this.customerRepositry.save(body);
      if (!result) {
        return { error: true, status: 400, message: `Failed to add customer to the customer table` }
      }
      return { error: false, status: 200, response: result }
    }

      
    catch (error: any) {
      log.error(`Customer-addCustomer : Error While adding customer data with error :${error}`)
      throw { error: true, status: 500, message: error }
    }
  }
}
  