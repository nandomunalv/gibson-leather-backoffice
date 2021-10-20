const database = require('./../config/server/database');
const service = require('./../src/glb-product/product.service');

describe('Test of products', () => {

   beforeAll(() => {
      database.query('SELECT 1 FROM StudentTable');
   });

   test('Get list of products', async () => {
      const products = await service.searchProducts();
      expect(products.length).toBe(products.length > 0);
   });
});