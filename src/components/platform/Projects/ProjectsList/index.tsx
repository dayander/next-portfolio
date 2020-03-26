import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import styled from 'styled-components';
import ProjectLink from '../ProjectLink';
import ProjectSectionQuery from '../../../../queries/ProjectSectionQuery';
import FullWidth from '../../../library/FullWidth';

const StyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-inline-start: 0;
`;

const ProjectList: React.FC = () => {
  const { loading, data } = useQuery(ProjectSectionQuery);
  const projects = data?.projectList;

  const projectList = projects?.map((project: any, i: number) => (
    <li key={i}>
      <ProjectLink {...project} />
    </li>
  ));
  return (
    <FullWidth>
      <StyledList>{projectList}</StyledList>
    </FullWidth>
  );
};

export default ProjectList;
