import { gql } from 'apollo-boost';

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
