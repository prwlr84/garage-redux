import { FETCH_CARS, FETCH_CAR, NEW_CAR } from '../actions'

export default function(state = [], action) {
  switch(action.type){
    case FETCH_CARS:
     return action.payload;
    case FETCH_CAR:
     return [action.payload];
    // case NEW_CAR:
    //  return state;
    default:
      return state
 }
}
