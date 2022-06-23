import Msg from "./Msg";

export const Person = ({ name, tel, img }) => {
  //   const { name, tel, img } = props;
  return (
    <div>
      {/* <h1>o/ {name}</h1> */}
      <Msg name={name} />
      <img src={img} alt="placeholder" />
      <p>{tel}</p>
    </div>
  );
};

export default Person;
