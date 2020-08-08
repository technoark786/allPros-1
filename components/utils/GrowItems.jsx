import React from 'react';
import { Grow } from '@material-ui/core';
import PropTypes from 'prop-types';

function GrowItems(props) {
  const {
    children, in: growIn, skip, factor,
  } = props;

  return (
    <>
      {React.Children.map(children, (child, index) => (
        <Grow
          in={growIn}
          style={{ transformOrigin: '0 0 0' }}
          timeout={(250 * (index + skip)) * factor}
        >
          {child}
        </Grow>
      ))}
    </>
  );
}

GrowItems.propTypes = {
  in: PropTypes.bool,
  skip: PropTypes.number,
  factor: PropTypes.number,
  children: PropTypes.node.isRequired,
};

GrowItems.defaultProps = {
  in: true,
  skip: 1,
  factor: 1,
};

export default GrowItems;
