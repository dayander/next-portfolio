import React from 'react';
import Head from 'next/head';

interface DocumentTitleProps {
  titleString?: string;
}

const DocumentTitle: React.FC<DocumentTitleProps> = ({ titleString }) => {
  const documentTitle = titleString
    ? `${titleString} - Anderson Day's Accessibility and Software Development Portfolio.`
    : 'Anderson Day&#x27;s Accessibility and Software Development Portfolio.';
  return (
    <Head>
      <title>{documentTitle}</title>
    </Head>
  );
};

export default DocumentTitle;
