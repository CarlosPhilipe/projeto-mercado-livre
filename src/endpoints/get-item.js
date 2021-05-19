const axios = require('axios');

const { itemFormatter } = require('../helpers/formatter');

const BASE_URL = 'https://api.mercadolibre.com';

const getItem = async (req, res) => {
  try {
    const { data: product } = await axios.get(`${BASE_URL}/items/${req.params.id}`);

    const { data: { plain_text } } = await axios.get(`${BASE_URL}/items/${req.params.id}/description`);

    const newProduct = itemFormatter(product);
    res.send({ 
      item: {
        ...newProduct,
        description: plain_text,
      }
    });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = getItem;
