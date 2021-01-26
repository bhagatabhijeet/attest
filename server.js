require('dotenv')
    .config();
const express = require('express');
const path = require("path");
const { graphqlHTTP } = require('express-graphql');
const schema=require('./schema/schema')

const PORT = process.env.PORT || 3001
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//use client build in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  // rootValue: root,
  graphiql: true,
}));


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
})


app.listen(PORT,()=>{
  console.log("Application started listening on PORT : " + PORT);
});




