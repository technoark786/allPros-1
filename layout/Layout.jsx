import { Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    marginTop: 64,
    flexGrow: 1,
  },
}));

function Layout(props) {
  const { pageName, children } = props;

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header pageName={pageName} />
      <Sidebar />
      <Fade in>
        <main className={classes.content}>
          {children}
        </main>
      </Fade>
    </div>
  );
}

Layout.propTypes = {
  pageName: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Layout.defaultProps = {
  pageName: '',
};

export default Layout;
