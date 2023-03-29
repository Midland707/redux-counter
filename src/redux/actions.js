export const increment = step => {
  return {
    type: 'test/Increment',
    payload: step,
  };
};

export const decrement = step => {
  return {
    type: 'test/Decrement',
    payload: step,
  };
};
