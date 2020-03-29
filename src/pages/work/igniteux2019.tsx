import React from 'react';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import withApollov2 from '../../hooks/withApollov2';

const IgniteUX2019: React.FC = () => {
  return (
    <BasePage>
      <PageHeader h1={'.....'} />
    </BasePage>
  );
};

export default withApollov2(IgniteUX2019);
