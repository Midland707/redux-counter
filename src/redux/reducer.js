export const testReducer = (state = 0, action) => {
  switch (action.type) {
    case 'test/Increment':
      return state + action.payload;
    case 'test/Decrement':
      return state - action.payload;
    default:
      return state;
  }
};
