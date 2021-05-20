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

    const items = data.results.map(product => (
      itemFormatter(product)
    ));

    const filters = data.filters
      .map(fitler => (fitler.values)) // Target values are in values 
      .reduce((list, sub) => list.concat(sub), []) // turns the arrays into a single array
      .map(fitler => {
         // In path_from_root has multables values in array
        if (fitler.path_from_root) {
          return fitler.path_from_root.map(path => path.name);
        }
        // or return name of category
        return fitler.name;
      })
      .reduce((list, sub) => list.concat(sub), []); // turns the arrays into a single array too

    res.send({
      author: req.author,
      categories: filters,
      items,
    });
  } catch (error) {
    res.send({ error });
  }
};

module.exports = listItems;
