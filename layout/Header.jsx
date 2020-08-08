import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
// import { useRouter } from 'next/router';
import CustomMenu from '../components/menu/CustomMenu';
import api from '../lib/api';
import { useState, useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { useAuth } from '../context/authContext';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const useStyles = makeStyles({
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  accountIcon: {
    cursor: 'pointer',
  },
  pageTitle: {
    flexGrow: 1,
  },
  selectRoot:{
    padding:'0.5em 3em 0.5em 1em'
  }
});

function Header(props) {
  const { pageName } = props;
  const classes = useStyles();
  const router = useRouter();
  const [businesses, setBusinesses] = useState();
  const [header, setHeader] = useState("");

  return (
    <AppBar elevation={0} className={classes.appBar} position="fixed">
      <Toolbar>
        <Typography className={classes.pageTitle} variant="h5" noWrap>
          {pageName}
        </Typography>
        <CustomMenu/>
        {/* <CustomMenu accountData={accountData} securityData={securityData} /> */}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  pageName: PropTypes.string,
};

Header.defaultProps = {
  pageName: '',
};

export default Header;
