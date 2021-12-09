const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    // graphiql is a development tool only for development purpose.
    graphiql: true,
  })
);

app.listen(4000, () => {
  console.log("listening");
});
