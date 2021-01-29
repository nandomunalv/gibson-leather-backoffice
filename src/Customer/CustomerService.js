import * as customerQuery from './CustomerQuery';
import * as customerTransform from './CustomerTransform';
import pool from '../../config/database';


exports.simpleSearch = () => {

}

export const insertNewCustomer = async (payload) => {
    console.log(joi);
    const newPayload = customerTransform.createTransform(payload);
    const result = await pool.query(customerQuery.INSERT_QUERY, [newPayload]);
    return result.insertId;
}
