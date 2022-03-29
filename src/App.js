import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import { useState } from 'react';
import easyLevelImages from './levels/easy';
import mediumLevelImages from './levels/medium';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);

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
      setClickedImages((prevState) => [...prevState, id]);
      setScore(score + 1);
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
  ];

  return (
    <>
      <Header score={score} highscore={highscore} />
      <Main level={levels[0]} clickImage={clickImage} />
      <Footer />
    </>
  );
}

export default App;
