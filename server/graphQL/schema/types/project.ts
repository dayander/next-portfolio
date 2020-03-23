import {gql} from 'apollo-server-express';

export default gql`
    type Project {
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
    }

    type Image {
        imgPath: String
        altText: String
    }

    type Query {
        project: Project
    }
`;


