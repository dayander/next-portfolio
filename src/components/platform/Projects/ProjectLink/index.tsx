import React from 'react';
import Typography from '@material-ui/core/Typography';
import ProjectWrapper from './ProjectWrapper';
import { ProjectLinkProps } from '../types';
import ProjectContent from './ProjectContent';
import Linked from '../../../util/Linked';

const ProjectLink: React.FC<ProjectLinkProps> = ({
  bgImage,
  getter,
  companyName,
  projectHeading,
}) => (
  <Linked href={`/work${getter}`}>
    <ProjectWrapper ProjectWrapperBgImage={bgImage}>
      <ProjectContent>
        <Typography component="h2" variant="h4">
          {companyName}
        </Typography>
        <Typography component="p" variant="subtitle1">
          {projectHeading}
        </Typography>
      </ProjectContent>
    </ProjectWrapper>
  </Linked>
);

export default ProjectLink;
