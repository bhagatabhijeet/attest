const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema=require('./schema/schema')

const PORT = process.env.PORT || 3001
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true,
}));



app.listen(PORT,()=>{
  console.log("Application started listening on PORT : " + PORT);
});




