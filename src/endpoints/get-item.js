const axios = require('axios');

const { itemFormatter } = require('../helpers/formatter');

const BASE_URL = 'https://api.mercadolibre.com';

const getItem = async (req, res) => {
  try {
    const productResponse = await axios.get(`${BASE_URL}/items/${req.params.id}`);

    if (productResponse.error) {
      res.status(404).send(productResponse);
    } else {
      const product = itemFormatter(productResponse.data);

      const { data: { plain_text } } = await axios.get(`${BASE_URL}/items/${req.params.id}/description`);

      res.status(200)
        .send({
          item: {
            ...product,
            description: plain_text,
          }
      });
    }
  } catch (error) {
    res.status(404).send(error);
  }
};

module.exports = getItem;
