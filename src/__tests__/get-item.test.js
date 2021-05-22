const axios = require('axios');
const supertest = require('supertest');
const server = require('../server');

const { validIdMock, invalidIdMock } = require('../__mocks__/get-item-mock');

jest.mock('axios');

describe('Test route /api/items/:id', () => {
  const productId = 'MLB1642157248';
  let response = null;

  describe('DADO: Uma requisição a rota  /api/items/:id', () => {
    describe('QUANDO:  o id é um id válido', () => {
      beforeEach(async () => {
        axios.get.mockResolvedValue(validIdMock);
        response = await supertest(server).get(`/api/items/${productId}`);
      });

      test('Então: possui status code 200', async () => {
        expect(response.status).toBe(200);
      });

      test('Então: a requisição possui o atributo item', async () => {
        expect(response.body).toHaveProperty('item');
      });

      test('Então: O atributo item possui o atributo price', async () => {
        const { item } = response.body;
        expect(item).toHaveProperty('price');
      });

      test('Então: O atributo price possui currency, amount e decimals não nulos', async () => {
        const { price } = response.body.item;
        expect(price.currency).not.toBeNull();
        expect(price.amount).not.toBeNull();
        expect(price.decimals).not.toBeNull();
      });

      test('Então: a requisição possui o atributo item', async () => {
        expect(response.body).toHaveProperty('author');
      });

      test('Então: O atributo author possui name igual Carlos e lastName igual Bahia', async () => {
        const { author } = response.body;
        expect(author.name).toBe('Carlos');
        expect(author.lastname).toBe('Bahia');
      });
    });

    describe('QUANDO: o id é um id inválido', () => {
      beforeEach(async () => {
        axios.get.mockResolvedValue(invalidIdMock);
        response = await supertest(server).get(`/api/items/${productId}`);
      });

      test('Então: possui status code 404', async () => {
        expect(response.status).toBe(404);
      });

      test('Então: a reposta da requisição possui o atributo error', async () => {
        expect(response.body).toHaveProperty('error');
      });

      test('Então: O erro retornado é igual "resource not found"', async () => {
        const { error } = response.body;
        expect(error).toBe("resource not found");
      });
    });
  });
});
