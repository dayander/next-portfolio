import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '../../library/List';

interface ResumeSkillsProps {
  skills: string[];
}

const ResumeSkills: React.FC<ResumeSkillsProps> = ({ skills }) => (
  <React.Fragment>
    <Typography component="h2" variant="h4">
      Skills
    </Typography>
    <List data={skills} />
  </React.Fragment>
);

export default ResumeSkills;
