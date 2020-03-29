import React from 'react';

interface ResumeDownloadLinkProps {
  pathToResume: string;
}

const ResumeDownloadLink: React.FC<ResumeDownloadLinkProps> = ({ pathToResume }) => (
  <a download href={pathToResume ? pathToResume : ''}>
    Download Resume
  </a>
);

export default ResumeDownloadLink;
