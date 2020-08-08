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

  async function fetchAllBusiness() {
    const { data } = await api.get('business');
    setBusinesses(data);
  }
  const [{businessId}, dispatch] = useAuth();

  useEffect(() => {
    fetchAllBusiness();
    setHeader(businessId)
  }, []);
  const handleChange = async event => {
    try {
      let {
        data: { authorization },
      } = await api.get(`business/token/${event.target.value}`);
      dispatch({ type: 'UPDATE_BUSINESS_TOKEN', payload: authorization });
      localStorage.setItem('authToken', authorization);
      dispatch({ type: 'UPDATE_BUSINESS_ID', payload: event.target.value });
      setHeader(event.target.value);
      router.push(`/dashboard`);
    } catch (error) {
      console.log(error);
    }
    // router.push(`/businesses/edit/[id]`, `/businesses/edit/${event.target.value}`);
  };

  return (
    <AppBar elevation={0} className={classes.appBar} position="fixed">
      <Toolbar>
        <Typography className={classes.pageTitle} variant="h5" noWrap>
          {pageName}
        </Typography>

        <Select
          margin="dense"
          variant="filled"
          value={header}
          onChange={handleChange}
          style={{ color: 'white' }}
          classes={{ root: classes.selectRoot }}
        >
          <MenuItem value="Select" selected>
            <em>Select Business</em>
          </MenuItem>
          {businesses &&
            businesses.map(b => (
              <MenuItem key={b.id} value={b.id}>
                {b.businessName}
              </MenuItem>
            ))}
        </Select>
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
