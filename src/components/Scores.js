import '../styles/Scores.css';

const Scores = (props) => {
  return (
    <div className='scores'>
      <p>Score: {props.score}</p>
      <p>Highscore: {props.highscore}</p>
    </div>
  );
};

export default Scores;
