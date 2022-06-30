//?========================================================
//?                  USEEFFECT HOOK
//?========================================================
//! UseEffect Hook'u fonksiyonel componenlerde yan etkileri
//! (sede effect) gerceklestirmek icin kullanilir.
//! componentDidMount,componentDidUpdate,ve componentWillUnmount
//! metotlarinin bir birlesimi gibi dusunulebilir.

//! useEffect(() => {
//*   /* ComponentDidMount code */
//! }, []);

//! useEffect(() => {
//*   */ componentDidUpdate code */
//! }, [var1, var2]);

//! useEffect(() => {
//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, []);

//! useEffect(() => {
//*   //* componentDidMount code + componentDidUpdate code */

//!   return () => {
//*     //* componentWillUnmount code */
//!   };
//! }, [var1, var2]);

import { useState, useEffect } from "react";

const UseEffectHook = () => {
  const [count, setCount] = useState(0);

  //! componentDidMount (runs only once when the component is first loaded)
  //   useEffect(() => {
  //     console.log("mounted"); //! fetch, async-await, localStorage, setTimeout etc.
  //     setTimeout(() => console.log("data fetched"), 3000);
  //   }, []);

  //! componentDidMount + componentDidUpdate
  //   useEffect(() => {
  //     console.log("mounted + updated");
  //     setTimeout(() => {
  //       console.log("data fetched");
  //     }, 2000);
  //   }); //* note that there is no dependency array! this means it will run every update! OR whatever we put in the array, if it's value changes it will update as well.

  //! componentDidMount + componentWillUnmount
  const fetchData = () => {
    console.log("data fetched");
  };

  useEffect(() => {
    //! componentDidMount
    const timer = setInterval(fetchData, 1000);
    console.log("mounted");
    return () => {
      //! componentWillUnmount
      clearInterval(timer);
      console.log("unmounted");
    };
  }, []);

  console.log("rendered");
  return (
    <div className="container text-center mt-4">
      <h1 className="text-danger">useEffect</h1>
      <button onClick={() => setCount(count + 1)} className="btn btn-warning">
        increase
      </button>
    </div>
  );
};

export default UseEffectHook;
