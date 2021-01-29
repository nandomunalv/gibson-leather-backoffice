import * as customerQuery from './CustomerQuery';
import * as database from '../../config/database';


exports.simpleSearch = () => {

}

export const insertNewCustomer = async (payload) => {
    const result = await database.exc.query(customerQuery.INSERT_QUERY, payload);
    console.log(result);
}
