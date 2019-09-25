/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';


const DatePicker = ({ date, setDate }) => (
  <FormGroup css={{
    width: '200px',
    margin: '0 auto',
  }}
  >
    <Label
      for="date"
    >
    </Label>
    <Input
      type="date"
      name="date"
      id="date"
      placeholder="date placeholder"
      onChange={(e) => setDate(e.target.value)}
    />
  </FormGroup>
);

DatePicker.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};

export default DatePicker;
