import React from 'react';
import { KeyboardDatePicker } from '@material-ui/pickers';
import PropTypes from 'prop-types';
import { useConfig } from '../../context/globalSettings';

function DatePicker(props) {
  const { field, form, ...rest } = props;
  const [{ dateFormat }] = useConfig();
  const error = form.touched[field.name] && form.errors[field.name];
  return (
    <KeyboardDatePicker
      {...field}
      onChange={(e) => form.setFieldValue(field.name, e)}
      {...rest}
      error={error}
      helperText={error}
      format={dateFormat}
    />
  );
}

DatePicker.propTypes = {
  field: PropTypes.objectOf({
    name: PropTypes.string,
  }).isRequired,
  form: PropTypes.objectOf({
    touched: PropTypes.instanceOf(Array),
    errors: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default DatePicker;
