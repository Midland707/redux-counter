import { increment, decrement } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

export const Task = () => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(1));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  const value = useSelector(state => state);
  return (
    <div>
      <button type="button" onClick={handleIncrement}>
        Increment
      </button>
      <span>{value}</span>
      <button type="button" onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};
