import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import easyLevelImages from './levels/easy';
import mediumLevelImages from './levels/medium';
import hardLevelImages from './levels/hard';
import impossibleLevelImages from './levels/impossible';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);
  const [levelIndex, setLevelIndex] = useState(0);

  const dialogMessages = [
    'Oh, you lost, huh? Better luck next try!',
    'Okay, the game is easy, just don\'t click on the same movie twice. Let\'s start with Spider-Man!',
    'Hum, I see, not bad, let\'s get more serious now: X-MEN.',
    'Okay, okay, that\'s good, I admit, now try these:',
    'Okay, you might actually have a great memory. Here\'s my final challenge: I added more posters, find them! But be careful, all the other ones from past levels are here too.',
    'Congratulations, you have completed the challenge!',
  ];

  const [dialogMessage, setDialogMessage] = useState(dialogMessages[1]);

  function clickImage(id) {
    // checks if image was clicked before
    if (clickedImages.includes(id)) {
      setClickedImages([]);
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
      setLevelIndex(0);
      setDialogMessage(dialogMessages[0]);
    } else {
      setClickedImages((prevState) => [...prevState, id]);

      setScore((prevScore) => {
        // checks if should change level
        if (prevScore === 7) {
          setLevelIndex(1);
          setDialogMessage(dialogMessages[2]);
        } else if (prevScore === 20) {
          setLevelIndex(2);
          setDialogMessage(dialogMessages[3]);
        } else if (prevScore === 45) {
          setLevelIndex(3);
          setDialogMessage(dialogMessages[4]);
        } else if (prevScore === 55) {
          setLevelIndex(0);
          setDialogMessage(dialogMessages[5]);
          setHighscore(prevScore+1);
          setClickedImages([]);
          return 0;
        }
        // increments score
        return prevScore + 1;
      });
    }
  }

  // niveis
  const levels = [
    {
      name: 'Easy',
      images: easyLevelImages,
    },
    {
      name: 'Medium',
      images: mediumLevelImages,
    },
    {
      name: 'Hard',
      images: hardLevelImages,
    },
    {
      name: 'Impossible',
      images: impossibleLevelImages,
    },
  ];

  return (
    <>
      <Header score={score} highscore={highscore} />
      <Main
        level={levels[levelIndex]}
        message={dialogMessage}
        clickImage={clickImage}
      />
      <Footer />
    </>
  );
}

export default App;
