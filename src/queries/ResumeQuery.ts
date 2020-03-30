import gql from 'graphql-tag';

const ResumeQuery = gql`
  query ResumeQuery {
    resume {
      _id
      jobEntries {
        companyName
        jobTitle
        location
        startDate
        endDate
        bullets
      }
      education {
        school
        degree
      }
      relevantProjects
      skills
      pathToFile
    }
  }
`;

export default ResumeQuery;
