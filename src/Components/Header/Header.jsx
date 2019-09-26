/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Container, Jumbotron } from 'reactstrap';
import PropTypes from 'prop-types';

import DatePicker from '../DatePicker/DatePicker';


const Header = ({
  date, setDate, imageTitle, imageDescription,
}) => (
  <Jumbotron
    fluid
    className="bg-gradient-dark text-white"
    css={{
      padding: '3rem',
      margin: '0',
    }}
  >
    <Container fluid>
      <h1
        className="display-3"
        css={{
          paddingBottom: '2rem',
        }}
      >
        {imageTitle}
      </h1>
      <hr className="my-2 bg-white" />
      <DatePicker date={date} setDate={setDate} />
      <p
        className="lead"
        css={{
          paddingTop: '2rem',
        }}
      >
        {imageDescription}
      </p>
    </Container>
  </Jumbotron>
);

Header.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  imageTitle: PropTypes.string,
  imageDescription: PropTypes.string,
};

Header.defaultProps = {
  imageTitle: '',
  imageDescription: '',
};

export default Header;
