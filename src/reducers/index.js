import { combineReducers } from 'redux'
import { loaderReducer } from './loader';
import { promotionReducer } from './promotion'
import { socialfeedsReducer } from './socialfeeds';
import { hideMenuReducer } from './hideMenu';


const rootReducer = combineReducers({
  loader: loaderReducer,
  yt_videos: promotionReducer,
  socialfeeds: socialfeedsReducer,
  isMenuHidden: hideMenuReducer
});


export default rootReducer;

