import gql from 'graphql-tag';

const ResumeQuery = gql`
  query ResumeQuery {
    resume {
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
