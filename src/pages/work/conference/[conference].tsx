import React from 'react';
import { BasePage } from '../../../components/platform/BasePage';
import PageHeader from '../../../components/platform/PageHeader';
import { useRouter } from 'next/router';


const ConferenceTemplate: React.FC = () => {
  const { query } = useRouter()
  return(
    <BasePage>
      <PageHeader h1={'conference'} />

    </BasePage>
  )
};


export default ConferenceTemplate;