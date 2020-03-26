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
import Link from 'next/link';
import styled from 'styled-components';
import Icon from '../../library/Icon';

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
    minWidth: '200px',
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

const NavAnchor = styled.a`
  color: #fff;
  padding: 10px;
  font-size: 1.4em;
`;

const navLinks = routesObj.map((link: RouteLink, i: number) => (
  <ListItem key={i}>
    <Link href={link.route} passHref>
      <NavAnchor>{link.name}</NavAnchor>
    </Link>
  </ListItem>
));

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
        <List style={{ display: 'flex' }}>{navLinks}</List>
        <List style={{ display: 'flex' }}>
          <ListItem>
            <Link href="https://github.com/dayander" passHref prefetch={false}>
              <a>
                <Icon
                  alt={'Anderson Days Github'}
                  src={'/images/GitHub-Mark-Light-120px-plus.png'}
                />
              </a>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://www.linkedin.com/in/andersonday/" passHref prefetch={false}>
              <a>
                <Icon alt={'Anderson Days Linkedin'} src={'/images/Linkedin.png'} />
              </a>
            </Link>
          </ListItem>
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
      <Drawer className={classes.drawerMobile} onClose={handleMenuToggle} open={open}>
        <nav>
          <List onClick={handleMenuToggle}>
            {navLinks}
            <ListItem>
              <Link href="https://github.com/dayander" passHref prefetch={false}>
                <a>
                  <Icon
                    alt={'Anderson Days Github'}
                    src={'/images/GitHub-Mark-Light-120px-plus.png'}
                  />
                </a>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/andersonday/" passHref prefetch={false}>
                <a>
                  <Icon alt="Anderson Days Linkedin" src="/images/Linkedin.png" />
                </a>
              </Link>
            </ListItem>
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
