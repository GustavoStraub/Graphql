const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')
const cors = require('cors')


const app = express()

//liberar entrada
app.use(cors())

mongoose.connect('mongodb+srv://gustavo:a1234@grapqhl-teste-scpfh.gcp.mongodb.net/test?retryWrites=true&w=majority',  { useNewUrlParser: true})

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