/** @jsx jsx */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { jsx } from '@emotion/core';
import { Container } from 'reactstrap';

import Header from './Components/Header/Header';


const App = () => {
  const [imageData, setImageData] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${date}`)
      .then((result) => setImageData(result.data))
      .catch(() => console.log('Error retrieving image.'));
  }, [date]);

  return (
    <Container fluid className="text-center p-0">
      <Header
        date={date}
        setDate={setDate}
        imageTitle={imageData.title}
        imageDate={imageData.date}
        imageDescription={imageData.explanation}
      />
      {imageData.media_type === 'image'
        ? (
          <a
            href={imageData.hdurl}

          >
            <img
              className="w-100"
              src={imageData.url}
              alt={imageData.title}
            />
          </a>
        )
        : (
          <div css={{
            position: 'relative',
            width: '100%',
            height: '0',
            paddingBottom: '56.25%',
          }}
          >
            <iframe
              src={imageData.url}
              title={imageData.title}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              css={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        )}
    </Container>
  );
};

export default App;
