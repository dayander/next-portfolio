import {gql} from 'apollo-server-express';

export default gql`
    type Project {
        _id: ID
        projectName: String,
        companyName: String,
        projectHeading: String,
        challengeHeading: String,
        challenge: String,
        approachHeading: String,
        approach: String,
        outcomeHeading: String,
        outcome: String,
        tags: [String],
        headingImg: Image
        address: String
        getter:String
        bgImage: String
        challenge01: Image
        challenge02:Image
        process02: Image
        process01: Image
        outcome01: Image
    }

    type Image {
        imgPath: String
        altText: String
    }
    
    input ProjectInput {
        projectName: String
        address: String
        getter: String
    }

    type Query {
        project(input: ProjectInput): Project
    }
`;


