import React from 'react';
import { makeStyles } from '@material-ui/styles';
import green from '@material-ui/core/colors/green';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    height: 60,
    backgroundColor: 'white',
    border: `1px solid ${theme.palette.primary.main}`,
    transition: '0.2s',
    ...(props.hover && {
      '&:hover': {
        backgroundColor: 'lightgray',
      },
    }),
  }),
  green: (props) => ({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    height: 60,
    backgroundColor: green[100],
    border: `1px solid ${green[900]}`,
    transition: '0.2s',
    ...(props.hover && {
      '&:hover': {
        backgroundColor: green[100],
      },
    }),
  }),
}));

function ColoredListItem(props) {
  const {
    children, color, hover, ...rest
  } = props;

  const classes = useStyles({ hover });
  if (color === 'green') {
    return (
      <div className={classes.green} {...rest}>
        {children}
      </div>
    );
  }

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
}

ColoredListItem.propTypes = {
  color: PropTypes.string,
  hover: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ColoredListItem.defaultProps = {
  color: 'primary',
  hover: false,
};

export default ColoredListItem;
