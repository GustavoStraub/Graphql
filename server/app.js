const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://Gustavo:a1234>@grapqhl-teste-scpfh.gcp.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });

mongoose.connect('mongodb+srv://gustavo:a1234@grapqhl-teste-scpfh.gcp.mongodb.net/test?retryWrites=true&w=majority') 
mongoose.connection.once('open', () => {
    console.log('conectou')
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4001, () => {
    console.log('ta na porta 4001')
})