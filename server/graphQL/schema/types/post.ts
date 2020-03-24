import {gql} from 'apollo-server-express';

export default gql`
  enum PostType {
      ACCESSIBILITY
      SOFTWARE
      USER_EXPERIENCE
  }
    type Post {
        _id: ID
        name:String,
        title:String,
        content:String,
        slug: String,
        date: Date
        type: PostType,
    }

    input PostInput {
        name: String
        title: String
        date: Date
        type: PostType
    }

    type Query {
        post(input: PostInput!): Post
        postList: [Post]
    }


    input CreatePostInput {
        name:String!
        title:String!
        content:String,
        slug: String,
        date: Date
        type: PostType,
    }

    type Mutation {
        createPost(input: CreatePostInput!): Post!
    }
`;


