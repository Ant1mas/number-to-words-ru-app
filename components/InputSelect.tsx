import PropTypes from 'prop-types';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

// import styles from "./InputSelect.module.sass"

const InputSelect = ( props ) => {
  return (
    <>
      <FormControl style={{minWidth: props.minWidth}} fullWidth={props.fullWidth}>
        <InputLabel id="label-select">{props.label}</InputLabel>
        <Select
          name={props.name}
          labelId="label-select"
          value={props.value}
          onChange={props.onChange}
        >
          {props.items.map((item) => {
            return (
              <MenuItem key={item.value} value={item.value}>{item.name}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </>
  )
}

InputSelect.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  items: PropTypes.array,
  onChange: PropTypes.func,
  minWidth: PropTypes.number,
  fullWidth: PropTypes.bool,
};

InputSelect.defaultProps = {
  value: '',
  items: [],
  minWidth: 100,
  fullWidth: false,
};

export default InputSelect;
