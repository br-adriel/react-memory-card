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

  function clickImage(id) {
    // checks if image was clicked before
    if (clickedImages.includes(id)) {
      setClickedImages([]);
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
      setLevelIndex(0);
    } else {
      setClickedImages((prevState) => [...prevState, id]);

      setScore((prevScore) => {
        // checks if should change level
        if (prevScore === 7) {
          setLevelIndex(1);
        } else if (prevScore === 20) {
          setLevelIndex(2);
        } else if (prevScore === 45) {
          setLevelIndex(3);
        } else if (prevScore === 55) {
          setLevelIndex(0);
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
      <Main level={levels[levelIndex]} clickImage={clickImage} />
      <Footer />
    </>
  );
}

export default App;
