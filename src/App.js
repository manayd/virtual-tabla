import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [displayText, setDisplayText] = useState('');
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    const handleKeyPress = (event) => {
      const key = event.key.toLowerCase();

      switch (key) {
        case 'a':
          playAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', 'Text for letter A');
          break;
        case 'b':
          playAudio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', 'Text for letter B');
          break;
        // Add more cases for other letters if needed

        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const playAudio = (newAudioFile, newText) => {
    // Pause and reset the current audio
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    // Create a new Audio instance and play it
    const newAudio = new Audio(newAudioFile);
    newAudio.play();

    // Set the audio instance and display text
    setAudio(newAudio);
    setDisplayText(displayText + newText);

    // You can add additional logic for playing the audio here
    console.log(`Playing audio file: ${newAudioFile}`);
  };

  const handleStopButtonClick = () => {
    // Pause and reset the current audio, and clear the display text
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }

    setDisplayText('');
  };

  return (
    <div>
      <p>{displayText}</p>
      <button onClick={handleStopButtonClick}>Stop</button>
    </div>
  );
};

export default App;

