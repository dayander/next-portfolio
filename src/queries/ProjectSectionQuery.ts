import gql from 'graphql-tag';

const ProjectSectionQuery = gql`
  query ProjectSection {
    projectList {
      _id
      companyName
      projectHeading
      getter
      bgImage
      address
    }
  }
`;

export default ProjectSectionQuery;
