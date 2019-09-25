/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';


const Image = ({ image, hdImage }) => (
  <a href={hdImage}>
    <div
      css={{
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100vw',
        height: '80vh',
      }}
    />
  </a>
);

Image.propTypes = {
  image: PropTypes.string.isRequired,
  hdImage: PropTypes.string.isRequired,
};

export default Image;
