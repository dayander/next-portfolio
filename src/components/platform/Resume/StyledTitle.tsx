import React from 'react';
import Typography from '@material-ui/core/Typography';

const StyledTitle: React.FC = ({ children }) => (
  <Typography component="h2" style={{ margin: '25px auto' }} variant="h4">
    {children}
  </Typography>
);

export default StyledTitle;
