const express = require("express");

const { buildSchema } = require("graphql");

const { graphqlHTTP } = require("express-graphql");

const schema = buildSchema(`
    type Query {
        products: [Product]
        orders: [Order]
    }

    type Product{
        id: ID!
        description: String!
        reviews: [Review]
        price: Float!
    }

    type Review {
        rating: Int
        comment: String
    }

    type Order {
        date: String!
        subtotal: Float!
        items: [OrderItem]
    }

    type OrderItem {
        product: Product!
        quantity: Int!
    }
`);

const root = {
  products: [
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
  ],

  orders: [
    {
      date: "2005-05-05",
      subtotal: 91.98,
      items: [
        {
          product: {
            id: "1",
            description: "Old Red Shoe",
            price: 45.99,
          },
          quantity: 2,
        },
      ],
    },
  ],
};

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
