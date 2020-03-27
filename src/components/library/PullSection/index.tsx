import React from 'react';
import Typography from '@material-ui/core/Typography';
import PullQuote from '../PullQuote';

interface PullSectionProps {
  header: string;
  body: string;
}

const PullSection: React.FC<PullSectionProps> = ({ header, body }) => (
  <PullQuote>
    <Typography component="h2" variant="h4">
      {header}
    </Typography>
    <Typography component="p">{body}</Typography>
  </PullQuote>
);

export default PullSection;
