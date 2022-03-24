import '../styles/Header.css';
import Container from './Container';
import Scores from './Scores';

const Header = () => {
  return (
    <header>
      <Container>
        <h1>MEMORY CARDS</h1>
        <Scores />
      </Container>
    </header>
  );
};

export default Header;
