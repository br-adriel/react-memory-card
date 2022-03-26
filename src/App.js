import Header from './components/Header';
import './App.css';
import { useState } from 'react';
import Main from './components/Main';
import ea0 from './img/easy/0.jpg';
import ea1 from './img/easy/1.jpg';
import ea2 from './img/easy/2.jpg';
import ea3 from './img/easy/3.jpg';
import ea4 from './img/easy/4.jpg';
import ea5 from './img/easy/5.jpg';
import ea6 from './img/easy/6.jpg';
import ea7 from './img/easy/7.jpg';
import uniqid from 'uniqid';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  // functions for manipulating score
  const addScore = () => setScore(score + 1);
  const clearScore = () => setScore(0);

  // function for manipulating highscore
  const newHighscore = () => setHighscore(score);

  // niveis
  const easy = [
    {
      img: ea0,
      alt: 'Spider-Man: no way home',
      id: uniqid(),
    },
    {
      img: ea1,
      alt: 'Spider-Man',
      id: uniqid(),
    },
    {
      img: ea2,
      alt: 'Spider-Man: Homecoming',
      id: uniqid(),
    },
    {
      img: ea3,
      alt: 'The Amazing Spider-Man',
      id: uniqid(),
    },
    {
      img: ea4,
      alt: 'Spider-Man 3',
      id: uniqid(),
    },
    {
      img: ea5,
      alt: 'The Amazing Spider-Man 2',
      id: uniqid(),
    },
    {
      img: ea6,
      alt: 'Spider-Man: Far From Home',
      id: uniqid(),
    },
    {
      img: ea7,
      alt: 'Spider-Man 2',
      id: uniqid(),
    },
  ];

  const levels = [
    {
      name: 'Easy',
      images: [...easy],
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
