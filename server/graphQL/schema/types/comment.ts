import {gql} from 'apollo-server-express';

const commentTypeDef = gql`
    type Comment {
        name: String!
        email: String!
        message: String!
        date: Date
    }



    type Query {
        comment: Comment
    }
`;

export default commentTypeDef;
