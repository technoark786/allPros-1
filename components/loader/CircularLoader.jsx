import React from 'react';
import { CircularProgress } from '@material-ui/core';

const CircularLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '80vh',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </div>
  );
};

export const CircularLoaderWrapper = ({loading, children})=>{
  if(loading===true){
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100px',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </div>
  );}else{
    return children
  }
}
export default CircularLoader;
