import {gql} from 'apollo-server-express';

const commentTypeDef = gql`
    type Contact {
        name: String
        email: String
        message: String
        date: Date
    }



    type Query {
            contact: [Contact]
    }
    
    input ContactInput {
        name: String!
        email: String!
        message: String!
        date: Date
    }
  
  type Mutation {
      contactPost(input: ContactInput!): Contact! 
  }
`;

export default commentTypeDef;
