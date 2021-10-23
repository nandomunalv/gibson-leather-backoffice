const database = require('./../config/server/database');
const service = require('./../src/glb-product/product.service');

describe('Test of products', () => {
   test('Get list of products', async () => {
      const products = await service.searchProducts();
      expect(products.length).toBe(15);
   });
});
