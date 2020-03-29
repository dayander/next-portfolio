import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import ResumeExperience from './ResumeExperience';
import ResumeEducation from './ResumeEducation';
import ResumeSkills from './ResumeSkills';
import RelevantProjects from './RelevantProjects';
import ResumeDownloadLink from './ResumeDownloadLink';
import ResumeQuery from '../../../queries/ResumeQuery';

const Resume: React.FC = () => {
  const { data } = useQuery(ResumeQuery);
  const resumeData = data?.resume;

  return (
    <React.Fragment>
      <ResumeDownloadLink pathToResume={resumeData?.pathToFile ?? ''} />
      <ResumeExperience experienceList={resumeData?.jobEntries} />
      <ResumeEducation
        degree={resumeData?.education?.degree}
        school={resumeData?.education?.school}
      />
      <ResumeSkills skills={resumeData?.skills} />
      <RelevantProjects projects={resumeData?.relevantProjects} />
    </React.Fragment>
  );
};

export default Resume;
