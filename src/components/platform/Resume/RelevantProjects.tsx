import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '../../library/List';

interface RelevantProjectsProps {
  projects: string[];
}

const RelevantProjects: React.FC<RelevantProjectsProps> = ({ projects }) => (
  <React.Fragment>
    <Typography component="h2" variant="h4">
      Relevant Projects
    </Typography>
    <List data={projects} />
  </React.Fragment>
);

export default RelevantProjects;
