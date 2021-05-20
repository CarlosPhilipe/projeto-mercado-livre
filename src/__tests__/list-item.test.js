const axios = require('axios');
const supertest = require('supertest');
const server = require('../server');

const { validResponseMock } = require('../__mocks__/list-item-mock');

jest.mock('axios');

describe('Test route items?q=iphone', () => {
  const searchString = 'iphone';
  let response = null;

  describe(`DADO: Uma requisição a rota /items?q=${searchString}`, () => {
    describe('QUANDO: quando a barra tem uma busca válida', () => {
      beforeEach(async () => {
        axios.get.mockResolvedValue(validResponseMock);
        response = await supertest(server).get(`/items?q=${searchString}`);
      });

      test('Então: possui status code 200', async () => {
        expect(response.status).toBe(200);
      });

      test('Então: a resposta requisição possui o atributo items', async () => {
        expect(response.body).toHaveProperty('items');
      });

      test('Então: a resposta requisição possui o atributo items', async () => {
        expect(response.body).toHaveProperty('categories');
      });

      test('Então: a requisição possui o atributo author', async () => {
        expect(response.body).toHaveProperty('author');
      });

      test('Então: O atributo author possui name igual Carlos e lastName igual Bahia', async () => {
        const { author } = response.body;
        expect(author.name).toBe('Carlos');
        expect(author.lastname).toBe('Bahia');
      });
    });

  });
});
