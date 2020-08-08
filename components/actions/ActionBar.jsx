import React, { Fragment } from 'react';
import { Toolbar } from '@material-ui/core';
import PropTypes from 'prop-types';
import Action from './Action';
import { colors } from '../../lib/colors';

function ActionBar(props) {
  const { actions } = props;

  return (
    <Toolbar disableGutters>
      {actions.map((action) => (
        <Fragment key={action.id}>
          <Action {...action} />
        </Fragment>
      ))}
    </Toolbar>
  );
}

ActionBar.propTypes = {
  actions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    tip: PropTypes.string.isRequired,
    icon: PropTypes.element.isRequired,
    color: PropTypes.oneOf(colors),
    onClick: PropTypes.func,
  })).isRequired,
};

export default ActionBar;
