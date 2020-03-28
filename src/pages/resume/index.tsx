import React from 'react';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import Head from 'next/head';
import Container from '../../components/library/Container';
import Jumbotron from '../../components/library/Jumbotron';
import DocumentTitle from '../../components/util/DocumentTitle';
import Resume from '../../components/platform/Resume';

const ResumePage: React.FC = () => {
  return (
    <BasePage>
      <DocumentTitle titleString={'Resume'} />
      <PageHeader h1={'Resume'} />
      <Jumbotron>
        <Container>
          <Resume />
        </Container>
      </Jumbotron>
    </BasePage>
  );
};

export default ResumePage;
