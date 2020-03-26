import Head from 'next/head';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import PullQuote from '../../components/library/PullQuote';
import theme from '../../theme';
import ProjectSection from '../../components/platform/Projects/ProjectSection';

const Home = () => (
  <BasePage>
    <Head>
      <title>Create Next App</title>
      <link href="/favicon.ico" rel="icon" />
    </Head>
    <PageHeader
      h1="Anderson Day's Portfolio"
      h2="Software Development and Accessibility"
      image="/images/homePageHeader.jpg"
    />
    <PullQuote>
      <Typography component="p" style={{ fontWeight: 300 }} variant="h6">
        Hello, I am currently a Software Engineer at Target Corporation in the Technology Leadership
        Program, working on Target.com. I graduated from Michigan State University with a degree in{' '}
        <Link href="http://xa.cal.msu.edu/">
          <a style={{ color: theme.palette.primary.main }}>Experience Architecture.</a>
        </Link>{' '}
        Being a software engineering and a background in user experience design, I create accessible
        software from the ground up. I effectively communicate ideas to other engineers, designers,
        and various stakeholders. I love learning and experimenting with new technologies bringing
        users creative and innovative software solutions.
      </Typography>
    </PullQuote>
    <ProjectSection />

    <footer>footer</footer>
  </BasePage>
);

export default Home;
