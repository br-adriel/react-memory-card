import '../styles/Card.css';

const Card = (props) => {
  const { clickImage, id } = props;
  return (
    <div className='card' onClick={() => clickImage(id)}>
      <img src={props.img} alt={props.alt} />
    </div>
  );
};

export default Card;
