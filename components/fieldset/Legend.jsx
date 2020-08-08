import { makeStyles } from '@material-ui/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { useFieldset } from '../../lib/context';

const useStyles = makeStyles((theme) => ({
  legend: (props) => ({
    color: theme.palette[props.color].main,
  }),
}));

function Legend(props) {
  const { children } = props;

  const { color } = useFieldset();

  const classes = useStyles({ color });

  return (
    <legend className={classes.legend}>
      {children}
    </legend>
  );
}

Legend.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Legend;
