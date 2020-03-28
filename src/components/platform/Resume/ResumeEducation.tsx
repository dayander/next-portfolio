import React from 'react';
import Typography from '@material-ui/core/Typography';

interface ResumeEducationProps {
  school: string;
  degree: string;
}
const ResumeEducation: React.FC<ResumeEducationProps> = ({ school, degree }) => (
  <div style={{ paddingBottom: '25px' }}>
    <Typography component="h2" variant="h4">
      Education
    </Typography>
    <Typography component="p" variant="subtitle1">
      {school}
    </Typography>
    <Typography component="p" variant="h6">
      {degree}
    </Typography>
  </div>
);

export default ResumeEducation;
