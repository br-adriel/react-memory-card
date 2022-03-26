import { Github, Linkedin } from 'react-bootstrap-icons';
import Container from './Container';
import '../styles/Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <div className='links'>
          <p>
            Adriel Faria, {year}
            <span>
              <a
                href='https://www.github.com/br-adriel'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github size={22} />
              </a>
              <a
                href='https://www.linkedin.com/in/adriel-fsantos'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin size={22} />
              </a>
            </span>
          </p>
        </div>
        <div className='resources'>
          <p>
            All the images used on this page were taken from{' '}
            <a
              href='https://www.themoviedb.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              The Movie Database
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
