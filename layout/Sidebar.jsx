import {
  Collapse, Divider, Drawer, Icon, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import drawerData from '../lib/drawer-data';
import logo from "../assets/img/logo.jpg";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    cursor: 'pointer',
  },
  logoText: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 500,
    margin: 4,
  },
  submenu: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 40,
  },
  submenuItem: {
    fontSize: 14,
    padding: 4,
    cursor: 'pointer',
    userSelect: 'none',
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  menu: {
    marginTop: 20,
  },
  item: {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    padding: '9px 8px',
    '& #item': {
      color: theme.palette.secondary.main,
      transitionDuration: '0.1s',
    },
    '&:hover #item': {
      color: theme.palette.primary.main,
    },
  },
  itemMain: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: 1,
    height: '100%',
  },
  itemText: {
    userSelect: 'none',
    margin: '0 4px',
  },
  purple: {
    color: 'purple',
  },
}));

function Logo() {
  const classes = useStyles();

  return (
    <Link href="/dashboard">
      <div className={classes.logo}>
        {/* <Typography className={classes.logoText}>
          All Pros
        </Typography> */}
        <img src={logo} height="150px" style={{margin:'5px auto'}}/>
      </div>
    </Link>
  );
}

function Item(props) {
  const { icon, title } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.itemMain, classes.link)}>
      <Icon
        id="item"
        className={classes.itemText}
      >
        {icon}
      </Icon>
      <Typography
        id="item"
        className={classes.itemText}
      >
        {title}
      </Typography>
    </div>
  );
}

Item.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
};

function Sidebar() {
  const classes = useStyles();

  const state = {};
  drawerData.forEach((item) => {
    state[item.title] = false;
  });
  const [drawerState, setDrawerState] = useState(state);

  function handleToggleMenu(item) {
    setDrawerState((prevState) => ({
      ...prevState,
      [item.title]: !prevState[item.title],
    }));
  }

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >

      <div className={classes.toolbar}>
        <Logo />
      </div>

      <Divider />

      <div className={clsx(classes.menu, classes.grow)}>
        {drawerData.map((item) => (
          <div key={item.id}>
            {item.pages
              ? (
                <>
                  <div
                    role="button"
                    tabIndex="0"
                    className={classes.item}
                    onClick={() => handleToggleMenu(item)}
                    onKeyDown={() => handleToggleMenu(item)}
                  >

                    <Item icon={item.icon} title={item.title} />

                    {item.pages && (drawerState[item.title]
                      ? <ExpandLessIcon id="item" className={classes.itemText} />
                      : <ExpandMoreIcon id="item" className={classes.itemText} />
                    )}
                  </div>

                  {item.pages && (
                    <Collapse
                      in={drawerState[item.title]}
                      timeout="auto"
                      unmountOnExit
                    >
                      <div className={classes.submenu}>
                        {item.pages.map((subitem) => (
                          <Link
                            key={subitem.id}
                            href={subitem.link}
                          >
                            <Typography
                              className={classes.submenuItem}
                            >
                              {subitem.title}
                            </Typography>
                          </Link>
                        ))}
                      </div>
                    </Collapse>
                  )}
                </>
              ) : (
                <Link href={item.link}>
                  <div className={classes.item}>
                    <Item icon={item.icon} title={item.title} />
                  </div>
                </Link>
              )}
          </div>
        ))}
      </div>
    </Drawer>
  );
}

export default Sidebar;
