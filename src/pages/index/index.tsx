import React from 'react';
import Typography from '@material-ui/core/Typography';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import PullQuote from '../../components/library/PullQuote';
import theme from '../../theme';
import ProjectSection from '../../components/platform/Projects/ProjectSection';
import Linked from '../../components/util/Linked';
import DocumentTitle from '../../components/util/DocumentTitle';
import withApollov2 from '../../hooks/withApollov2';

const Home = () => (
  <BasePage>
    <DocumentTitle titleString={'Home'} />
    <PageHeader
      h1="Anderson Day's Portfolio"
      h2="Software Development and Accessibility"
      image="/images/homePageHeader.jpg"
    />
    <PullQuote>
      <Typography component="p" style={{ fontWeight: 300 }} variant="h6">
        Hello, I am currently a Software Engineer at Target Corporation in the Technology Leadership
        Program, working on Target.com. I graduated from Michigan State University with a degree in{' '}
        <Linked href="http://xa.cal.msu.edu/" styles={{ color: theme.palette.primary.main }}>
          Experience Architecture.
        </Linked>{' '}
        Being a software engineering and a background in user experience design, I create accessible
        software from the ground up. I effectively communicate ideas to other engineers, designers,
        and various stakeholders. I love learning and experimenting with new technologies bringing
        users creative and innovative software solutions.
      </Typography>
    </PullQuote>
    <ProjectSection />
  </BasePage>
);

export default withApollov2(Home);
