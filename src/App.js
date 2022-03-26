import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import easyLevelImages from './levels/easy';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  // functions for manipulating score
  function clickImage(id) {
    console.log(id);
    if (clickedImages.includes(id)) {
      setClickedImages([]);
      if (score > highscore) {
        setHighscore(score);
      }
      setScore(0);
    } else {
      setClickedImages([...clickedImages, id]);
      setScore(score + 1);
    }
  }

  // niveis
  const levels = [
    {
      name: 'Easy',
      images: easyLevelImages,
    },
  ];

  return (
    <>
      <Header score={score} highscore={highscore} />
      <Main level={levels[0]} />
    </>
  );
}

export default App;
