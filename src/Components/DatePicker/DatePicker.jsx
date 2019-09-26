/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';


const DatePicker = ({ setDate }) => (
  <FormGroup css={{
    margin: '2rem auto 1rem',
  }}
  >
    <Label
      for="date"
      css={{
        fontSize: '1.5rem',
      }}
    >
      Pick a date to view that day&apos;s photo
    </Label>
    <Input
      type="date"
      name="date"
      id="date"
      placeholder="date placeholder"
      css={{
        width: '200px',
        margin: '0 auto',
      }}
      onChange={(e) => setDate(e.target.value)}
    />
  </FormGroup>
);

DatePicker.propTypes = {
  setDate: PropTypes.func.isRequired,
};

export default DatePicker;
