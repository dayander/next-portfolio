import { gql } from 'apollo-server-express';

const resumeTypeDef = gql`
  scalar Date

  type ResumeJobEntry {
    companyName: String!
    jobTitle: String!
    location: String!
    startDate: String!
    endDate: String
    bullets: [String]
  }

  type EducationEntry {
    school: String!
    degree: String!
  }

  type Resume {
    jobEntries: [ResumeJobEntry]!
    education: EducationEntry!
    relevantProjects: [String]!
    skills: [String]!
    pathToFile: String!
  }

  type Query {
    resume: Resume
  }
  type Query {
    ResumeJobEntryList: [ResumeJobEntry]
  }
`;

export default resumeTypeDef;
