
import axios from 'axios'

const ytAPI = 'https://www.googleapis.com/youtube/v3/search';
const API_KEY = 'AIzaSyCmRSiLffO1HT_c3GrdOWtN1jj1qC_UjLg';
const USER_ID = 'PublicisGroupe';
const LIMIT = 2;
let ytAPIUrl = `${ytAPI}?key=${API_KEY}&user=${USER_ID}&part=snippet,id&order=date&maxResults=`;




const Api = {
  loadPromotionalVideos(size) {
    let ytAPIFullUrl;
    if (window.location.hostname === 'localhost') {
      ytAPIFullUrl = '/data/youtube.json'
    } else {
      if (size) {
        ytAPIFullUrl = ytAPIUrl + size;
      } else {
        ytAPIFullUrl = ytAPIUrl + LIMIT;
      }
    }
    return axios.get(ytAPIFullUrl);
  },
  loadSocialFeeds() {
    let ytAPIFullUrl;
    if (window.location.hostname === 'localhost') {
      ytAPIFullUrl = '/data/youtube.json'
    } else {
      ytAPIFullUrl = ytAPIUrl + 6;
    }
    return axios.get(ytAPIFullUrl);
  }
}

export default Api;