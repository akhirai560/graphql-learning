const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    // graphiql is a development tool only for development purpose.
    graphiql: true,
    schema,
  })
);

app.listen(4000, () => {
  console.log("listening");
});
