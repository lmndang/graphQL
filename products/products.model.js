const products = [
  {
    id: "1",
    description: "Red Shoe",
    price: 42.99,
  },
  {
    id: "2",
    description: "Blue Jean",
    price: 12.99,
  },
];

const getAllProducts = () => {
  return products;
};

module.exports = {
  getAllProducts,
};
