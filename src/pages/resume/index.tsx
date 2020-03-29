import React from 'react';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import Container from '../../components/library/Container';
import Jumbotron from '../../components/library/Jumbotron';
import DocumentTitle from '../../components/util/DocumentTitle';
import Resume from '../../components/platform/Resume';
import withApollov2 from '../../hooks/withApollov2';

const ResumePage: React.FC = () => (
  <BasePage>
    <DocumentTitle titleString={'Resume'} />
    <PageHeader colorProp={'black'} h1={'Resume'} />
    <Jumbotron>
      <Container>
        <Resume />
      </Container>
    </Jumbotron>
  </BasePage>
);

export default withApollov2(ResumePage);
