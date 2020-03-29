import React from 'react';
import { BasePage } from '../../components/platform/BasePage';
import ContactForm from '../../components/platform/Forms/ContactForm';
import PageHeader from '../../components/platform/PageHeader';
import DocumentTitle from '../../components/util/DocumentTitle';
import Jumbotron from '../../components/library/Jumbotron';
import Container from '../../components/library/Container';
import Panel from '../../components/library/Panel';
import withApollov2 from '../../hooks/withApollov2';

const ContactPage: React.FC = () => {
  return (
    <BasePage>
      <DocumentTitle titleString={'Contact'} />
      <PageHeader colorProp={'black'} h1={'Contact Anderson Day'} h2={'Lets get in touch!'} />
      <Jumbotron>
        <Container>
          <Panel>
            <ContactForm />
          </Panel>
        </Container>
      </Jumbotron>
    </BasePage>
  );
};

export default withApollov2(ContactPage);
