const {app}=require('../app');
const supertest=require('supertest');
const mockRequest = supertest(server);



describe('Web server', () => {

    test('Should respond with Hello World on home rout', async () => {

        const response = await mockRequest.put('/');
        expect(response.body).toBe("Hello World");
    
      });

      test('can get person name, age and gender and respond with age + 5', async () => {

        const response = await mockRequest.post('/person').send({
          name:"Adam",
          age:20,
          gender:"male"

        });
    
        expect(response.body).toBe(25);
    
      });

})