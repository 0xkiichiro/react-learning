import Button from "../button/Button";
import cardStyle from "./card.module.css";

//* module.css creates unique classNames, therefore prevents clashing

const Card = ({ img, btnName, dil }) => {
  return (
    <div>
      <h1 className={cardStyle["title"]}>{dil}</h1>
      <img className={cardStyle["images"]} src={img} alt="pic-description" />
      <Button btnName={btnName} />
    </div>
  );
};

export default Card;
