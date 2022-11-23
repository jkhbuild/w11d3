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
  switch (action.type) {
    case ADD:
      nextState[action.produce.id] = { id: action.produce.id, count: 1 };
    default:
      return state;
  }
}
