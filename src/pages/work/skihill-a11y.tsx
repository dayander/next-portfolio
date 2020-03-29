import React from 'react';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/react-hooks';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import SingleProjectQuery from '../../queries/SingleProjectQuery';
import withApollov2 from '../../hooks/withApollov2';

const SkiHillA11yPage: React.FC = () => {
  const { query } = useRouter();
  const { data } = useQuery(SingleProjectQuery, { variables: { projectName: query.projectName } });
  const project = data?.project;
  console.log(data);
  return (
    <BasePage>
      <PageHeader h1={'ski hill a11y'} />
    </BasePage>
  );
};

export default withApollov2(SkiHillA11yPage);
