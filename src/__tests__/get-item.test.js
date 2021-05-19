const axios = require('axios');
const supertest = require('supertest');
const server = require('../server');

const getItemMock = require('../__mocks__/get-item-mock.json');

jest.mock('axios');

describe('Test route /items/:id', () => {
  const productId = 'MLB1642157248';
  let response = null;

  axios.get.mockResolvedValue(getItemMock);
  describe('DADO: Uma requisição a rota  /items/:id', () => {
    describe('QUANDO:  o id é um id válido', () => {
      beforeEach(async () => {
        response = await supertest(server).get(`/items/${productId}`);
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
    });
  });
});
