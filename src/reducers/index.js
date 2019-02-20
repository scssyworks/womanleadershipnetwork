import { combineReducers } from 'redux'
import { loaderReducer } from './loader';
import { promotionReducer } from './promotion'
import { socialfeedsReducer } from './socialfeeds';


const rootReducer = combineReducers({
  loader: loaderReducer,
  yt_videos: promotionReducer,
  socialfeeds: socialfeedsReducer
});


export default rootReducer;

