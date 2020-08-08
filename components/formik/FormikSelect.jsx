import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  formControl: {

    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function FormikSelect({
  field,
  options,
  textField,
  textField2,
  valueField,
  fullWidth,
  label,
  form: { touched, errors },
  parser,
  ...props
}) {
  const classes = useStyles();
  const hasError = !!((touched[field.name] && errors[field.name]));
  return (

    <FormControl className={classes.formControl} fullWidth={fullWidth} error={hasError}>
      <InputLabel htmlFor={field.name}>{label}</InputLabel>
      <Select {...field} {...props} displayEmpty>
        {options.map((item) => (
          <MenuItem
            key={item.id}
            value={item[valueField]}
          >
          {parser?parser(item[textField]):textField2 ? item[textField]+" - "+ item[textField2] :item[textField]}
          </MenuItem>
        ))}
      </Select>
      {touched[field.name] && errors[field.name] && (
        <FormHelperText style={{ color: 'red' }}>
          {errors[field.name]}
        </FormHelperText>
      )}
    </FormControl>
  );
}

FormikSelect.propTypes = {
  field: PropTypes.objectOf({
    name: PropTypes.string,
  }).isRequired,
  form: PropTypes.objectOf({
    touched: PropTypes.instanceOf(Array),
    errors: PropTypes.instanceOf(Array),
  }).isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
  label: PropTypes.string,
  textField: PropTypes.string.isRequired,
  valueField: PropTypes.string.isRequired,
  fullWidth: PropTypes.bool,
};

FormikSelect.defaultProps = {
  fullWidth: false,
  options: [],
  label: '',
};

export default FormikSelect;
