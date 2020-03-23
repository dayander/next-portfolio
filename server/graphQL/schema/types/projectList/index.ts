import {gql} from 'apollo-server-express';

const projectListTypeDef = gql`
    type ProjectList {
        projects: [Project]
    }

    

    type Query {
        projects: ProjectList
    }
`;

