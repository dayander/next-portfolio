import {gql} from 'apollo-server-express';

const typeDefs = gql`
    type User {
        email: String!
        avatar: String
        friends: [User]!
    }

    type Query {
        me: User!
    }
`;

export default typeDefs;



// from tutorial


// import { mergeTypes } from "merge-graphql-schemas";
//
// import User from "./User/";
// import Post from "./Post/";
// import Comment from "./Comment/";
//
// const typeDefs = [User, Post, Comment];
//
// // NOTE: 2nd param is optional, and defaults to false
// // Only use if you have defined the same type multiple times in
// // different files and wish to attempt merging them together.
// export default mergeTypes(typeDefs, { all: true })