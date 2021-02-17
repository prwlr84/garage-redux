import { SET_GARAGE } from '../actions'

export default function(state = [], action) {
  switch(action.type){
    case SET_GARAGE:
     return action.payload;
    default:
      return state
 }
}
