
import { LOAD_PROMOTIONAL_VIDEOS } from '../constants'

export function promotionReducer(state = [], action) {
  //
  // console.log("-products-reducer-");
  switch (action.type) {
    case LOAD_PROMOTIONAL_VIDEOS: {
      let { yt_videos } = action;
      return [...yt_videos]
    }

    default:
      return state;
  }
}

