// * =======================================================
// *                     EVENTS
// * =======================================================

//? ReactJS, Tarayicilar arasi uyumluluk ve performans artisi gibi
//? sebeplerden oturu Sentetik Event olarak adilandirilan Olaylari
//? kullanir. Sentetik Event, aslinda tarayicinin dogal event'larinin
//? bir sarmalayici (Wrapper) arabirimle ortulmesi ile olusur. Bu sayede,
//? React ortaminda kullanilan event'larin bilindik tarayicilarda
//? sorunsuz calismasini saglanir.
//? Ayrinti icin : https://reactjs.org/docs/events.html

function Events() {
  let heading = "events";

  const handleClick = () => {
    alert("btn clicked!");
  };

  const handleClear = (text) => {
    alert(text);
  };

  const handleChange = (event) => {
    // console.log(heading);
    heading = "hooks";
    // console.log(heading);
    console.log(event.target);
  };

  return (
    <div>
      <div className="display-4 text-danger my-4">{heading}</div>
      <button onClick={handleClick} className="btn btn-warning">
        click me
      </button>
      <button
        onClick={() => handleClear("clear btn pressed")}
        className="btn btn-danger"
      >
        clear
      </button>
      <button onClick={(event) => handleChange(event)} className="btn btn-dark">
        change
      </button>
    </div>
  );
}

export default Events;

//! info console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
