import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from './Components/Header/Header';
import Image from './Components/Image/Image';
import './App.css';


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
    <div className="App">
      <Header
        date={date}
        setDate={setDate}
        imageTitle={imageData.title}
        imageDate={imageData.date}
        imageDescription={imageData.explanation}
      />
      {imageData.media_type === 'image'
        ? (
          <Image
            image={imageData.url}
            hdImage={imageData.hdurl}
          />
        )
        : (
          <iframe
            width="900"
            height="506"
            src={imageData.url}
            title={imageData.title}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
    </div>
  );
};

export default App;
