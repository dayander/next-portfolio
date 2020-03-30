import React, { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import Icon from '../../library/Icon';
import Linked from '../../util/Linked';
import theme from '../../../theme';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: '10px',
  },
  appBar: {
    padding: '10px',
    backgroundColor: theme.palette.primary.main,
  },
  alignLeft: {
    marginLeft: 'auto',
  },
  navIcon: {
    maxWidth: '25px',
    maxHeight: '26px',
  },
  drawerMobile: {
    minWidth: '400px',
  },
  drawer: {
    paper: {
      root: {
        backgroundColor: theme.palette.primary.main,
      },
    },
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    padding: '10px',
  },
  toolbar: {},
  linkStyle: {},
}));

interface RouteLink {
  route: string;
  name: string;
}

const routesObj: RouteLink[] = [
  {
    route: '/',
    name: 'Home',
  },
  {
    route: '/work',
    name: 'Work',
  },
  {
    route: '/resume',
    name: 'Resume',
  },
  {
    route: '/contact',
    name: 'Contact',
  },
];

const NavAnchorStyles = {
  color: theme.palette.common.white,
  padding: '10px',
  fontSize: '1.4em',
};

const navLinks = routesObj.map((link: RouteLink, i: number) => (
  <ListItem key={i}>
    <Linked href={link.route} styles={NavAnchorStyles}>
      {link.name}
    </Linked>
  </ListItem>
));

const navIconLinks = (
  <>
    <ListItem>
      <Linked href="https://github.com/dayander">
        <Icon alt={'Anderson Days Github'} src={'/images/GitHub-Mark-Light-120px-plus.png'} />
      </Linked>
    </ListItem>
    <ListItem>
      <Linked href="https://www.linkedin.com/in/andersonday/">
        <Icon alt="Anderson Days Linkedin" src="/images/Linkedin.png" />
      </Linked>
    </ListItem>
  </>
);

export default function Index() {
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:780px)');
  const [open, setOpen] = useState(false);

  const handleMenuToggle = useCallback(() => {
    setOpen(!open);
  }, [open, setOpen]);

  const desktopMenu = (
    <>
      <Typography component="p" style={{ color: '#fff', padding: '10px' }} variant="h6">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Anderson Day's Portfolio
      </Typography>
      <nav className={classes.alignLeft} style={{ display: 'flex' }}>
        <List style={{ display: 'flex' }}>
          {navLinks}
          {navIconLinks}
        </List>
      </nav>
    </>
  );

  const mobileMenu = (
    <>
      <IconButton
        aria-expanded={open}
        aria-label="menu"
        className={classes.menuButton}
        color="inherit"
        edge="start"
        onClick={handleMenuToggle}
      >
        <MenuIcon />
      </IconButton>
      <Typography component="p" style={{ color: '#fff' }} variant="subtitle1">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Anderson Day's Portfolio
      </Typography>
      <Drawer className={classes.drawer} onClose={handleMenuToggle} open={open}>
        <Button onClick={handleMenuToggle}>Close</Button>
        <nav style={{ minWidth: '250px', backgroundColor: 'black' }}>
          <List onClick={handleMenuToggle}>
            {navLinks}
            {navIconLinks}
          </List>
        </nav>
      </Drawer>
    </>
  );

  return (
    <AppBar className={classes.appBar} position="static">
      <Toolbar className={classes.toolbar}>{matches ? desktopMenu : mobileMenu}</Toolbar>
    </AppBar>
  );
}
