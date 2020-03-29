import gql from 'graphql-tag';

const ProjectSectionQuery = gql`
  query ProjectSection {
    projectList {
      companyName
      projectHeading
      getter
      bgImage
    }
  }
`;

export default ProjectSectionQuery;
