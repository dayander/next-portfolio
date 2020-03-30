import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useRouter } from 'next/router';
import Typography from '@material-ui/core/Typography';
import ProjectSectionQuery from '../../../queries/ProjectSectionQuery';
import Container from '../Container';
import Well from '../Well';
import ProjectLink from '../../platform/Projects/ProjectLink';

const Onward: React.FC = () => {
  const { data } = useQuery(ProjectSectionQuery);
  const router = useRouter();
  const projects = data?.projectList?.filter((project: any) => project.address !== router.asPath);

  return (
    <React.Fragment>
      <Well>
        <Container>
          <Typography component="h2" variant="h3">
            Onward
          </Typography>
        </Container>
        <ul>
          {projects?.map((x: any, i: number) => (
            <li key={i}>
              <ProjectLink {...x} />
            </li>
          ))}
        </ul>
      </Well>
    </React.Fragment>
  );
};

export default Onward;
