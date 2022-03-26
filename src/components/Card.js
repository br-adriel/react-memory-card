import '../styles/Card.css';

const Card = (props) => {
  return (
    <div className='card'>
      <img src={props.img} alt={props.alt} />
    </div>
  );
};

export default Card;
