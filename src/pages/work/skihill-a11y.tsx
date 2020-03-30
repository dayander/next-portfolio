import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import Typography from '@material-ui/core/Typography';
import { BasePage } from '../../components/platform/BasePage';
import PageHeader from '../../components/platform/PageHeader';
import SingleProjectQuery from '../../queries/SingleProjectQuery';
import withApollov2 from '../../hooks/withApollov2';
import DocumentTitle from '../../components/util/DocumentTitle';
import PullSection from '../../components/library/PullSection';
import LargePicture from '../../components/library/LargePicture';
import Jumbotron from '../../components/library/Jumbotron';
import Well from '../../components/library/Well';
import Container from '../../components/library/Container';
import Onward from '../../components/library/Onward';

const SkiHillA11yPage: React.FC = () => {
  const { data } = useQuery(SingleProjectQuery, { variables: { getter: '/skihill-a11y' } });
  const project = data?.project;

  return (
    <BasePage>
      <DocumentTitle titleString={'Ski Hill A11y'} />
      <PageHeader h1={project?.companyName} h2={project?.projectHeading} image={project?.bgImage} />
      <Well>
        <Jumbotron>
          <Container>
            <Typography component="h2" variant="h4">
              Project Overview
            </Typography>
            <Typography component="h3" variant="h6">
              Project Description
            </Typography>
            <Typography component="p">
              Ski hill a11y is a web application that has two copies of the site that are easily
              toggled between. The site starts out inaccessible and allows the user to toggle to the
              accessible version. I built this as a tool for learning web developers to see examples
              of what makes a site accessible versus inaccessible. The application contains errors
              with heading structure, language of the web page, color contrast, image alternative
              text, form labels on inputs, being able to increase text size, keyboard navigation,
              semantic lists and updating page titles. This project was also presented at the
              Accessible Learning Conference 2018, "An Introduction to Web Accessibility."
            </Typography>
            <Typography component="h3" variant="h6">
              Technologies Used:
            </Typography>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Node and Express</li>
              <li>WCAG 2.0</li>
            </ul>
            <Typography component="h3" variant="h6">
              Project Role
            </Typography>
            <Typography component="p">
              I designed and developed this application with input from Michigan State University
              faculty aligning course goals with accessibility knowledge in the Experience
              Architecture's program Introduction to Web Authoring and Advanced Web Authoring
            </Typography>
            <Typography component="h3" variant="h6">
              Live Project Links
            </Typography>
            <ul>
              <li>
                <a href={'http://skihill-a11y.herokuapp.com/'}>Ski Hill A11y Live</a>
              </li>
              <li>
                <a
                  href={
                    'https://docs.google.com/presentation/d/1SPBQfTHbIX4fvw4XtloGkpQK8mSqqygUKhpTAvL6zpA/edit?usp=sharing'
                  }
                >
                  Accessible Learning Conference Presentation Slides
                </a>
              </li>
              <li>
                <a
                  href={
                    'https://github.com/dayander/Accessible-Learning-Confernce-2018-presentation-w-server'
                  }
                >
                  Ski Hill A11y Github Repo
                </a>
              </li>
            </ul>
          </Container>
        </Jumbotron>
      </Well>

      <PullSection body={project?.challenge} header={project?.challengeHeading} />
      <LargePicture altText={''} imgPath={project?.largeImage} />
      <PullSection body={project?.approach} header={project?.approachHeading} />
      <PullSection body={project?.outcome} header={project?.outcomeHeading} />
      <Onward />
    </BasePage>
  );
};

export default withApollov2(SkiHillA11yPage);
