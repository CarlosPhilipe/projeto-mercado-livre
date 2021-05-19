const itemFormatter = (product) => {
  // From break prince on ammount and decimal parts
  const [amount, decimals] = product.price.toString().split('.');

  return (
    {
      id: product.id,
      title: product.title,
      price: {
        currency: product.currency_id,
        amount: Number(amount),
        decimals: Number(decimals),
      },
      picture: product.pictures[0].url,
      condition: product.condition,
      free_shipping: product.shipping.free_shipping,
      sold_quantity: product.sold_quantity,
    }
  );
};

module.exports = {
  itemFormatter,
};
