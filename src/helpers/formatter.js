const itemFormatter = (product) => {
  // From break prince on ammount and decimal parts
  const [amount, decimals] = product.price.toString().split('.');

  return (
    {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: Number(amount) || 0,
        decimals: Number(decimals) || 0,
      },
      picture: product.pictures ? product.pictures[0].url : product.thumbnail,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
    }
  );
};

module.exports = {
  itemFormatter,
};
