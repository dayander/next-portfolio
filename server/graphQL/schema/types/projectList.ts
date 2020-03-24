import {gql} from 'apollo-server-express';

const projectListTypeDef = gql`    

    

    type Query {
        projectList: [Project]
    }
`;

export default projectListTypeDef;
