import { IQueryResponse } from "./interfaces";


/**

 * generates error
 * @param status status code
 * @param message message of the error
 * @returns IQueryResponse object

 */

 export function generateError(status: number, message : string | any){
  
    return { status : status, message : message, error : true }
}

/**

 * validates the IQueryResponse object

 * @param response IQueryResponse

 * @returns the response from IQueryResponse

 */

 export function validateResponse(response : IQueryResponse){

    if(response.error){

        throw new Error(response.message);

    }
    return response.response;

}