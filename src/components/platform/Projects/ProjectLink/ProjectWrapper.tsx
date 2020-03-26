import styled from 'styled-components';

interface ProjectWrapperProps {
  readonly backgroundImage: string;
}

const ProjectWrapper = styled.div<ProjectWrapperProps>`
  min-height: 350px;
  height: 350px;
  margin: 20px auto;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${props => props.backgroundImage};
`;

export default ProjectWrapper;
