import React from 'react';
import Typography from '@material-ui/core/Typography';
import List from '../../library/List';
import StyledTitle from './StyledTitle';

interface SingleExperienceProps {
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

const SingleExperience: React.FC<SingleExperienceProps> = ({
  companyName,
  jobTitle,
  startDate,
  endDate,
  bullets,
}) => (
  <React.Fragment>
    <Typography component="h3" variant="h5">
      {companyName}
    </Typography>
    <Typography component="p" variant="subtitle1">
      {jobTitle}
    </Typography>
    <Typography component="p" variant="subtitle2">
      {`${startDate} - ${endDate}`}
    </Typography>
    <List data={bullets} />
  </React.Fragment>
);

interface ResumeExperienceProps {
  experienceList: SingleExperienceProps[];
}

const ResumeExperience: React.FC<ResumeExperienceProps> = ({ experienceList }) => (
  <React.Fragment>
    <StyledTitle>Experiences</StyledTitle>
    {experienceList?.map((x, i) => (
      <SingleExperience key={i} {...x} />
    ))}
  </React.Fragment>
);

export default ResumeExperience;
