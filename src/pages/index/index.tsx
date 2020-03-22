import Head from 'next/head';
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const JOBS_QUERY = gql`
  query {
    jobs {
      id
      title
      applyUrl
      company {
        name
      }
    }
  }
`;

const Home = () => {
  console.log('place holder');
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <header>hey</header>
      <p>
        kjsfjnsdfj hksdjkhdsjkfsdjkhsdf hjksdhjkashjkdfkhjsadhj ksfdjkhfdsjhksdfhjkfds
        hjkasd;asdjkasdjaslk jdjkasdlkalksd jasljkdalskdjkasljdk
      </p>
      <p>
        kjsfjnsdfj hksdjkhdsjkfsdjkhsdf hjksdhjkashjkdfkhjsadhj ksfdjkhfdsjhksdfhjkfds
        hjkasd;asdjkasdjaslk jdjkasdlkalksd jasljkdalskdjkasljdk
      </p>
      <main>main</main>

      <footer>footer</footer>
    </div>
  );
};

export default Home;
