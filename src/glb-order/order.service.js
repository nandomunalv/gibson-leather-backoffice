const database = require('./order.dao');
const helpers = require('./order.commons');

const searchProducts = async (products) => {
    const productList = `'${products.join("','")}'`;
    const result = await database.findProductsBySku(productList);
    console.log(JSON.stringify(helpers.addProductsToList(result)));
    const productData = helpers.addProductsToList(result);

    let totalPrice = 0;

    for (let i = 0; i < productData.length; i++) {
        totalPrice += productData[i].price;
    }

    console.log('>> Total', totalPrice);
}

const addOrder = () => {

}

module.exports = {
    addOrder,
    searchProducts
}