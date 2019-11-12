const graphql = require('graphql')
const _ = require('lodash')

const {GraphQLObjectType,
     GraphQLString,
      GraphQLSchema,
       GraphQLID,
        GraphQLInt,  
        GraphQLList 
    } = graphql

//dados ficticios
var books = [
    {name :'a revolta das batatas', genre:'fantasia', id: '1', authorId:'1'},
    {name: 'a volta dos que não foram', genre: 'fantasia', id:'2',authorId:'2'},
    {name: 'The Long Earth', genre:'Sci-Fi', id:'3',authorId:'3'},
    {name: 'João e o pé de feijão', genre:'fantasia', id:'4',authorId:'3'},
    {name: 'Potato', genre:'Sci-Fi', id:'5',authorId:'2'},
    {name: 'A flauta de batata', genre:'fantasia', id:'6',authorId:'1'}
]

var authors = [
    {name : 'Lex', age: 44, id:'1'},
    {name: 'godztavo', age: 66, id:'2'},
    {name: 'joão', age: 96, id:'3'}
]

const BookType = new GraphQLObjectType({
    name: 'book',
    fields: () =>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                return _.find(authors, {id: parent.authorId})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'author',
    fields: () =>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt},
        books: {
            type: new GraphQLList (BookType),
            resolve(parent, args){
                return _.filter(books, {authorId: parent.id})
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args) {
                //codigo para pegar data do db ou outro 
               return _.find(books, {id: args.id})
            }
        },
        authors: {
            type: AuthorType,
            args: { id: { type: GraphQLID}},
            resolve(parent, args) {
                //codigo para pegar data do db ou outro 
               return _.find(authors, {id: args.id})
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})