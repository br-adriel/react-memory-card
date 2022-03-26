import Card from './Card';
import '../styles/Main.css';

const Main = (props) => {
  const images = props.level.images.sort(() => Math.random() - 0.5);
  return (
    <main>
      <div className='level'>
        <h2>Level: {props.level.name}</h2>
      </div>
      <div className='game'>
        {images.map((image) => {
          return (
            <Card
              key={image.id}
              img={image.img}
              alt={image.alt}
              clickImage={props.clickImage}
              id={image.id}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Main;
