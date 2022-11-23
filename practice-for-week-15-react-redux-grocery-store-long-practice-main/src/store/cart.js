const ADD = "ADD";

export const addProduce = (produceid) => {
  return {
    type: ADD,
    produce: produceid,
  };
};

export function cartReducer(state = {}, action) {
  Object.freeze(state);
  const nextState = { ...state };
  console.log(action)

  switch (action.type) {
    case ADD:
      nextState[action.produce] = { id: action.produce, count: 1 };
      return nextState
    default:
      return state;
  }
}
