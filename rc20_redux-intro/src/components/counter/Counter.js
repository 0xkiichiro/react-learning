import "./Counter.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { decrease, increase, reset } from "../../redux/actions/counterActions";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer.counter);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>counter: {counter}</h1>
      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatch(increase())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          onClick={() => dispatch(decrease())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          onClick={() => dispatch(reset())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
