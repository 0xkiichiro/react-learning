import btnStyle from "./button.module.css";

const Button = ({ btnName }) => {
  return (
    //! when two class names collide we can prevent that by
    //! changing our css name to stuff.module.css
    //! importing normal css like line 8 & kebabcase like line 9
    <div className={btnStyle.title}>
      <button className={btnStyle["btn-blue"]}>{btnName}</button>
    </div>
  );
};

export default Button;
