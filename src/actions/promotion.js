
import { LOAD_PROMOTIONAL_VIDEOS } from '../constants'
import Api from '../Api'

export function loadPromotionalVideos(size) {
  // thunk
  return function (dispatch) {
    //dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Products..' })
    Api.loadPromotionalVideos(size)
      .then(response => response.data)
      .then(videos => {
        // log
        let yt_videos = videos.items.slice(0, 2);
        // // dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: LOAD_PROMOTIONAL_VIDEOS, yt_videos }) // async action
      })
      .catch(error => {
        //dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading products' })
      })
  }
}

