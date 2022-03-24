import Header from './components/Header';
import './App.css';
import { useState } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

  // functions for manipulating score
  const addScore = () => setScore(score + 1);
  const clearScore = () => setScore(0);

  // function for manipulating highscore
  const newHighscore = () => setHighscore(score);

  return <Header score={score} highscore={highscore} />;
}

export default App;
