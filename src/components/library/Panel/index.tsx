import styled from 'styled-components';
import theme from '../../../theme';

const Panel = styled.div`
  marginbottom: 20px;
  background-color: ${theme.palette.secondary.light};
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.05);
  padding: 25px;
`;

export default Panel;
