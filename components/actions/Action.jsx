import React from 'react';
import { Tooltip, IconButton } from '@material-ui/core';
import PropTypes from 'prop-types';
import { colors } from '../../lib/colors';

function Action(props) {
  const {
    tip,
    icon,
    color,
    onClick,
  } = props;

  return (
    <Tooltip title={tip}>
      <IconButton
        color={color}
        onClick={onClick}
      >
        {icon}
      </IconButton>
    </Tooltip>
  );
}

Action.propTypes = {
  tip: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  color: PropTypes.oneOf(colors),
  onClick: PropTypes.func,
};

Action.defaultProps = {
  color: 'primary',
  onClick: undefined,
};

export default Action;
