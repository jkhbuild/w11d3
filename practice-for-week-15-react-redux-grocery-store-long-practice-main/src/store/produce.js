import produceData from "../mockData/produce.json"

export function produceReducer(state = {}, action) {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach(produce => {
              newState[produce.id] = produce;
            //   console.log(produce)
            });
            return newState;
      default:
        return state;
    }
  }

  const POPULATE = "produce/POPULATE"

export const populateProduce = produce => {
    
    return {
        type:POPULATE,
        produce: produceData
    }
}