import React from 'react';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: (props) => ({
    display: 'flex',
    alignItems: 'center',
    padding: 8,
    borderRadius: 4,
    height: 60,
    backgroundColor: 'white',
    boxShadow: '1px 1px 2px 2px lightgrey',
    transition: '0.2s',
    cursor: 'pointer',
    ...(props.hover && {
      '&:hover': {
        boxShadow: '0 0 3px 4px lightgrey',
        // transform: 'scale(1.01)',
      },
    }),
  }),
});

function ListItem(props) {
  const { children, hover, ...rest } = props;

  const classes = useStyles({ hover });

  return (
    <div className={classes.root} {...rest}>
      {children}
    </div>
  );
}

ListItem.propTypes = {
  hover: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

ListItem.defaultProps = {
  hover: false,
};

export default ListItem;
