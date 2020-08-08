import { makeStyles } from '@material-ui/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { FieldsetContext } from '../../lib/context';
import { colors } from '../../lib/colors';

const useStyles = makeStyles((theme) => ({
  fieldset: (props) => ({
    borderRadius: 4,
    border: `2px solid ${theme.palette[props.color].main}`,
    padding: 12,
  }),
}));

function Fieldset(props) {
  const { color, children } = props;

  const classes = useStyles({ color });

  return (
    <fieldset className={classes.fieldset}>
      <FieldsetContext.Provider value={{ color }}>
        {children}
      </FieldsetContext.Provider>
    </fieldset>
  );
}

Fieldset.propTypes = {
  color: PropTypes.oneOf(colors),
  children: PropTypes.node.isRequired,
};

Fieldset.defaultProps = {
  color: 'primary',
};

export default Fieldset;
