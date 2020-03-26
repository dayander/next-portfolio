import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import ProjectWrapper from './ProjectWrapper';
import { ProjectLinkProps } from '../types';
import ProjectContent from './ProjectContent';

const ProjectLink: React.FC<ProjectLinkProps> = ({
  bgImage,
  getter,
  companyName,
  projectHeading,
}) => {
  console.log(bgImage, getter, companyName, projectHeading);
  return (
    <Link href={`/work${getter}`} passHref>
      <a>
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
      </a>
    </Link>
  );
};

export default ProjectLink;
