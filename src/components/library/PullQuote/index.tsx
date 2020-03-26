import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Jumbotron from '../Jumbotron';
import Container from '../Container';
import theme from '../../../theme';

interface PullQuoteProps {
  children: ReactNode;
}

const InnerPullQuote = styled.div`
  padding: 0 0 0 30px;
  border-left: solid ${theme.palette.primary.main} 5px;
`;

const PullQuote: React.FC<PullQuoteProps> = ({ children }) => (
  <Jumbotron>
    <Container>
      <InnerPullQuote>{children}</InnerPullQuote>
    </Container>
  </Jumbotron>
);

export default PullQuote;
