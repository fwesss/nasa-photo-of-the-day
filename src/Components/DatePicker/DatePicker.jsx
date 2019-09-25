/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';


const DatePicker = ({ setDate }) => (
  <FormGroup css={{
    width: '200px',
    margin: '0 auto',
  }}
  >
    <Label
      for="date"
    />
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
  setDate: PropTypes.func.isRequired,
};

export default DatePicker;
