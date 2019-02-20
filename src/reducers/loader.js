
import { REQUEST_BEGIN, REQUEST_FINISH } from '../constants'

export function loaderReducer(state = [], action) {
  //
  // console.log("-carousel-reducer-");
  switch (action.type) {
    case REQUEST_BEGIN: {
      return true;
    }
    case REQUEST_FINISH: {
      return false;
    }
    default:
      return state;
  }
}