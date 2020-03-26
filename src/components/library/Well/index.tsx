import styled from 'styled-components';
import theme from '../../../theme';

const Well = styled.div`
  border: 1px solid ${theme.palette.secondary.dark};
  padding: 19px;
  min-height: 20px;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: ${theme.palette.secondary.main};
`;

export default Well;
