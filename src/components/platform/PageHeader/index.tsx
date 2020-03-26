import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  header: {
    paddingTop: '48px',
    paddingBottom: '48px',
    backgroundColor: '#eee',
  },
  headerInner: {
    margin: '0 auto',
    padding: '10px 35px',
    color: '#fff',
    maxWidth: '960px',
  },
  subtitle: {
    fontWeight: 300,
  },
}));

interface PageHeaderProps {
  h1: string;
  h2?: string;
  image?: string;
  colorProp?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ h1, h2, image, colorProp }) => {
  const classes = useStyles();
  return (
    <div className={classes.header} style={{ backgroundImage: `url(${image})` }}>
      <div className={classes.headerInner}>
        <Typography component="h1" style={{ color: colorProp }} variant="h3">
          {h1}
        </Typography>
        {h2 ? (
          <h2 className={classes.subtitle} style={{ color: colorProp }}>
            {h2}
          </h2>
        ) : null}
      </div>
    </div>
  );
};

export default PageHeader;
