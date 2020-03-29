import styled from 'styled-components';
import theme from '../../../theme';

const FooterWrapper = styled.div`
  width: 100%;
  background-color: ${theme.palette.primary.main};
  color: ${theme.palette.common.white};
  bottom: 0;
  min-height: 50px;
  padding: 25px;
`;

export default FooterWrapper;
