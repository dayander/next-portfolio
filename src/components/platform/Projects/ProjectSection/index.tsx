import React from 'react';
import Grid from '@material-ui/core/Grid';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import ProjectLink from '../ProjectLink';
import Well from '../../../library/Well';
import { Project } from '../types';
import ProjectSectionQuery from '../../../../queries/ProjectSectionQuery';

const GridItem = styled(Grid)`
  padding: 0 15px;
`;

interface ProjectSectionProps {
  projects?: Project[];
}

const ProjectSection: React.FC = () => {
  const { loading, data } = useQuery(ProjectSectionQuery);
  const projects = data?.projectList;

  if (loading) {
    return (
      <Well>
        <div style={{ minHeight: '800px' }}></div>
      </Well>
    );
  }
  return (
    <Well>
      <Grid container>
        <GridItem item xs={12}>
          <ProjectLink
            bgImage={projects?.[2]?.bgImage}
            companyName={projects?.[2]?.companyName}
            getter={projects?.[2]?.getter}
            projectHeading={projects?.[2]?.projectHeading}
          />
        </GridItem>
        <GridItem item sm={6} xs={12}>
          <ProjectLink
            bgImage={projects?.[1]?.bgImage}
            companyName={projects?.[1]?.companyName}
            getter={projects?.[1]?.getter}
            projectHeading={projects?.[1]?.projectHeading}
          />
        </GridItem>
        <GridItem item sm={6} xs={12}>
          <ProjectLink
            bgImage={projects?.[3]?.bgImage}
            companyName={projects?.[3]?.companyName}
            getter={projects?.[3]?.getter}
            projectHeading={projects?.[3]?.projectHeading}
          />
        </GridItem>
      </Grid>
    </Well>
  );
};

export default ProjectSection;
