import '../styles/Header.css';
import Container from './Container';
import Scores from './Scores';

const Header = (props) => {
  return (
    <header>
      <Container>
        <h1>MEMORY CARDS</h1>
        <Scores score={props.score} highscore={props.highscore} />
      </Container>
    </header>
  );
};

export default Header;
