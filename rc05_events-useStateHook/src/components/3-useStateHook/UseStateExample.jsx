//* ======================= HOOKS ==============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmedlir. import { useState } from "react";
//* 2. Hook'lar ust seviyede kullanilmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://reactjs.org/docs/hooks-rules.html
//* ==============================================================

import { useState } from "react";

const UseStateExample = () => {
  // useState en çok kullanılan hook'tur.
  // Bir state in degisken,ve obje ile kutlanilabilmesine olanak saglar
  // useState hook'u 2 deger dondurur.

  // 1. si state degiskenidir.
  // 2. si ise state"i degistirmeye izin veren bir setter metodudur.
  // useState parametre olarak state'in ilk degerini alir.

  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };

  const handleDec = () => {
    setCount(count - 1);
  };

  const [info, setInfo] = useState({
    name: "0xkiichiro",
    email: "0xkiichiro@protonmail.com",
    age: 25,
  });
  //! below line is very important! we must deconst the object to change its values
  const incAge = () => {
    setInfo({ ...info, age: info.age + 1 });
  };

  return (
    <div>
      <div className="display-4 text-danger my-4">useState count:{count}</div>
      <button onClick={handleInc} className="btn btn-warning">
        increase
      </button>
      <button onClick={() => setCount(0)} className="btn btn-danger">
        clear
      </button>
      <button onClick={handleDec} className="btn btn-dark">
        decrease
      </button>
      <section>
        <h1 className="display-4 text-danger m-4">useState Object</h1>
        <h2>{info.name}</h2>
        <h3>{info.email}</h3>
        <h3>{info.age}</h3>
        <button onClick={() => incAge()} className="btn btn-warning">
          inc age
        </button>
      </section>
    </div>
  );
};

export default UseStateExample;
