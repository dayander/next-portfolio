import {gql} from 'apollo-server-express';



const resumeTypeDef = gql`
    scalar Date

    type ResumeJobEntry {
        companyName: String!
        jobTitle: String!
        location: String!
        startDate: Date!
        endDate: Date!
        bullets: [String]!
    }



    type Query {
        ResumeJobEntry: ResumeJobEntry
    }
    type Query {
        ResumeJobEntryList: [ResumeJobEntry]
    }
`;

export default resumeTypeDef;
