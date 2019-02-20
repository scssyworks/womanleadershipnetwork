
import { LOAD_SOCIAL_FEEDS } from '../constants'
import Api from '../Api'

export function loadSocialFeeds() {
  // thunk
  return function (dispatch) {
    //dispatch({ type: 'REQUEST_BEGIN', message: 'Loading Products..' })
    Api.loadSocialFeeds()
      .then(response => response.data)
      .then(socialfeeds => {

        // log
        let feeds = socialfeeds.items;
        // // dispatch({ type: 'REQUEST_FINISH', message: '' })
        dispatch({ type: LOAD_SOCIAL_FEEDS, feeds }) // async action
      })
      .catch(error => {
        //dispatch({ type: 'REQUEST_ERROR', message: 'Error while loading products' })
      })
  }
}

