import React from 'react';
import Typography from '@material-ui/core/Typography';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import withApollov2 from '../../hooks/withApollov2';
import Jumbotron from '../../components/library/Jumbotron';
import PullQuote from '../../components/library/PullQuote';
import SingleProjectQuery from '../../queries/SingleProjectQuery';

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
`;

const VideoIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`;

const IgniteUX2019: React.FC = () => {
  const { data } = useQuery(SingleProjectQuery, { variables: { getter: '/igniteux2019' } });
  const project = data?.project;
  return (
    <BasePage>
      <PageHeader h1={project?.companyName} h2={project?.projectHeading} image={project?.bgImage} />
      <Jumbotron>
        <PullQuote>
          <Typography component="h2" variant="h3">
            About the Presentation
          </Typography>
          <br />
          <Typography component="p" variant="subtitle1">
            In March of 2019 I had the opportunity to present at Ignite UX Michigan. Ignite UX
            Michigan is a conference in Ann Arbor, Michigan. Each Ignite Talk is a 5 minute talk
            with topics ranging from User Experience Design and User Experience Research.
          </Typography>
        </PullQuote>

        <PullQuote>
          <Typography component="h2" variant="h3">
            My Presentation
          </Typography>
          <br />
          <Typography component="p" variant="subtitle1">
            The presentation I gave at Ignite UX is focused on Accessibility. I covered WebAIM's
            Research of the top accessibility errors on the webs most visited pages.
          </Typography>
        </PullQuote>
        <VideoContainer>
          <VideoIframe
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            src="https://www.youtube.com/embed/69Gjod5B4fw"
            title={project?.companyName}
          ></VideoIframe>
        </VideoContainer>
      </Jumbotron>
    </BasePage>
  );
};

export default withApollov2(IgniteUX2019);
