import cardStyle from "../scss/modules/card.module.scss";
import btnStyle from "../scss/modules/button.module.scss";

const Card = ({ data }) => {
  return (
    <div className={cardStyle["container"]}>
      {data.map((item) => {
        const { id, name, job, img, comment } = item;
        return (
          <div className={cardStyle["card"]} key={id}>
            <h1>{name}</h1>
            <h2>{job}</h2>
            <p>{comment}</p>
            <img src={img} alt="alt-text" />
            <div className={btnStyle["btn-container"]}>
              <button className={btnStyle["btn-container--small"]}>
                small
              </button>
              <button className={btnStyle["btn-container--large"]}>
                large
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
