const axios = require('axios');

const { itemFormatter } = require('../helpers/formatter');

const BASE_URL = 'https://api.mercadolibre.com';

const listItems =  async (req, res) => {
  try {
    const { data } = await axios.get(`${BASE_URL}/sites/MLB/search`, {
     params: {
       q: req.query.q,
       limit: req.query.limit
     }
    });

    res.send({ data });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = listItems;
