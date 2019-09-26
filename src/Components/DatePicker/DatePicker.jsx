/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  FormGroup, Label, Input,
} from 'reactstrap';
import PropTypes from 'prop-types';


const DatePicker = ({ today, setDate }) => (
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
      onChange={(e) => {
        if (e.target.value > today.toISOString().split('T')[0]) {
          alert("NASA hasn't taken that picture yet. Please select an earlier date.");
        } else {
          setDate(e.target.value);
        }
      }}
    />
  </FormGroup>
);

DatePicker.propTypes = {
  today: PropTypes.instanceOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
};

export default DatePicker;
