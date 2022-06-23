//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.

import "./Content.css";

//? to import an image from the local file you need to import it as shown below
import pic1 from "./img/pic-1.jpg";

const Content = () => {
  const imgStyle = {
    display: "block",
    width: "600px",
    margin: "1rem auto",
  };
  return (
    <div className="content">
      {/* {Inline styling} */}
      <h2 style={{ color: "red" }}>React JS</h2>
      <p class="par-1" style={{ backgroundColor: "lightgreen" }}>
        Content
      </p>
      <p className="par-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        omnis? Illo nostrum accusantium earum quas enim dignissimos quia nobis
        deleniti?
      </p>

      <img style={imgStyle} src={pic1} alt="smth"></img>
      <img style={imgStyle} src={pic1} alt="smth"></img>
    </div>
  );
};

export default Content;
