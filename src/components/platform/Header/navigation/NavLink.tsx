import React from 'react';
import Link from 'next/link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  link: {
    color: '#fff',
    padding: '10px',
  },
}));

function Linked(props) {
  const { children, to } = props;
  const classes = useStyles();

  return (
    <Link className={classes.link} to={to}>
      {children}
    </Link>
  );
}
