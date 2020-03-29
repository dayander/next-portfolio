import React from 'react';
import { BasePage } from '../../components/platform/BasePage';
import DocumentTitle from '../../components/util/DocumentTitle';
import PageHeader from '../../components/platform/PageHeader';
import withApollov2 from '../../hooks/withApollov2';

const ContactSuccessPage: React.FC = () => {
  return (
    <BasePage>
      <DocumentTitle titleString="Contact Success" />
      <PageHeader h1="Contact Message Sent" />
    </BasePage>
  );
};

export default withApollov2(ContactSuccessPage);
