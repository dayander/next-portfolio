import Head from 'next/head';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import { BasePage } from '../../components/platform/BasePage';

const Query = gql`
  query {
    project {
      projectName
    }
  }
`;

const Home = () => {
  return (
    <BasePage>
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <p>
        kjsfjnsdfj hksdjkhdsjkfsdjkhsdf hjksdhjkashjkdfkhjsadhj ksfdjkhfdsjhksdfhjkfds
        hjkasd;asdjkasdjaslk jdjkasdlkalksd jasljkdalskdjkasljdk
      </p>
      <p>
        kjsfjnsdfj hksdjkhdsjkfsdjkhsdf hjksdhjkashjkdfkhjsadhj ksfdjkhfdsjhksdfhjkfds
        hjkasd;asdjkasdjaslk jdjkasdlkalksd jasljkdalskdjkasljdk
      </p>

      <footer>footer</footer>
    </BasePage>
  );
};

export default Home;
