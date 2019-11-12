const graphql = require('graphql')

const {GraphqlQLObjectType, GraphqlQLString} = graphql

const BookType = new GraphqlQLObjectType({
    name: 'book',
    fields: () =>({
        id: {type: GraphqlQLString},
        name: {type: GraphqlQLString},
        genre: {type: GraphqlQLString}
    })
})