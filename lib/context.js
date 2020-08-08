import React, { useContext } from 'react';

export const SnackbarContext = React.createContext();
export const useSnackbar = () => useContext(SnackbarContext);

export const FieldsetContext = React.createContext();
export const useFieldset = () => useContext(FieldsetContext);
