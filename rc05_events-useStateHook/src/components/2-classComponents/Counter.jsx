import React, { Component } from "react";

//* ============================ CLASS COMPONENTS AND STATE ============================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================================
//! rce emmet was used
class Counter extends Component {
  //! rconst emmet was used
  constructor(props) {
    super(props);

    this.state = {
      count: props.count || 0,
    };
    // binding handleInc method to the counter class
    this.handleInc = this.handleInc.bind(this);
  }

  //! with normal functions we also need to bind it to the class
  handleInc() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  //! if we use arrow function we dont need to bind anything
  handleDec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  //! Yazmis oldugumuz metotlar default olarak classa baglanmaz.Ancak, React built-in fonksiyonlari baglidir.
  //* Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz yada otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.

  render() {
    return (
      <div className="container text-center mt-4">
        <div className="display-4 text-danger my-4">
          count: {this.state.count}
        </div>
        <button onClick={this.handleInc} className="btn btn-success">
          increase
        </button>
        <button onClick={this.handleDec} className="btn btn-warning">
          decrease
        </button>
      </div>
    );
  }
}

export default Counter;
