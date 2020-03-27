import React from 'react';
import Head from 'next/head';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import ProjectList from '../../components/platform/Projects/ProjectsList';
import Jumbotron from '../../components/library/Jumbotron';

const WorkPage: React.FC = () => (
  <BasePage>
    <Head>
      <title>Work - Anderson Day's Accessibility and Software Development Portfolio.</title>
    </Head>
    <PageHeader
      colorProp="black"
      h1="Work"
      h2="In Accessibility, Software Development, and Public Speaking."
    />
    <Jumbotron>
      <ProjectList />
    </Jumbotron>
  </BasePage>
);

export default WorkPage;
