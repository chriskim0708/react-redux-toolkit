import {
  increment,
  decrement,
  incrementByAmount,
} from "../../store/counter/counterSlice";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch(increment());
  };

  const handleClickDecrement = () => {
    dispatch(decrement());
  };

  const handleClickIncrementByAmount = () => {
    dispatch(incrementByAmount(5));
  };

  return (
    <div>
      <div>
        <button onClick={handleClickIncrement}>Increment</button>
        <span>{count}</span>
        <button onClick={handleClickDecrement}>Decrement</button>
        <button onClick={handleClickIncrementByAmount}>Increment +5</button>
      </div>
    </div>
  );
}
