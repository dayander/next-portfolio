import React from 'react';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import Head from 'next/head';

const ResumePage: React.FC = () => {
  return (
    <BasePage>
      <Head>
        <title>Resume - Anderson Day's Accessibility and Software Development Portfolio.</title>
      </Head>
      <PageHeader h1={'Resume'} />
    </BasePage>
  );
};

export default ResumePage;
