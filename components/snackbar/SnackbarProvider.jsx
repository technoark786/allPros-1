import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainSnackbar from './MainSnackbar';
import { SnackbarContext } from '../../lib/context';

function SnackbarProvider(props) {
  const { children } = props;

  const [snackbar, setSnackbarState] = useState({
    variant: 'info',
    message: '',
    open: false,
  });

  function openSnackbar(variant, message) {
    setSnackbarState({
      variant,
      message,
      open: true,
    });
  }

  function closeSnackbar() {
    setSnackbarState((prevState) => ({
      ...prevState,
      open: false,
    }));
  }

  const value = { snackbar, openSnackbar, closeSnackbar };

  return (
    <SnackbarContext.Provider value={value}>
      <MainSnackbar />
      {children}
    </SnackbarContext.Provider>
  );
}

SnackbarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SnackbarProvider;
