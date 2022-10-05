const products = [
  {
    id: "1",
    description: "Red Shoe",
    price: 42.99,
  },
  {
    id: "2",
    description: "Blue Jean",
    price: 80.99,
  },
];

const getAllProducts = () => {
  return products;
};

const getProductsByPrice = (min, max) => {
  return products.filter((product) => {
    return product.price >= min && product.price <= max;
  });
};

const getProductById = (id) => {
  return products.find((product) => {
    return product.id === id;
  });
};

module.exports = {
  getAllProducts,
  getProductsByPrice,
  getProductById,
};
