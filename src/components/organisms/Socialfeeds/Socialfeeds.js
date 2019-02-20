import React, { Component } from 'react'
import { loadSocialFeeds } from '../../../actions/socialfeed';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../static/styles/masonry.css';


class Socialfeed extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let { actions } = this.props;
    actions.loadSocialFeeds();
  }
  getTimeDifference(publishDate) {
    let diffStr = '';
    let date1 = new Date(publishDate);
    let date2 = new Date();
    let timeDiff = Math.abs(date2.getTime() - date1.getTime());
    let diffMinutes = Math.ceil(timeDiff / (1000 * 60));
    if (diffMinutes <= 1) {
      diffStr = `just now`
    } else if (diffMinutes > 1 && diffMinutes < 60) {
      diffStr = `${diffMinutes} minutes ago`
    } else if (diffMinutes > 1 && diffMinutes < 60) {

    }
  }
  renderFeeds() {
    let { socialfeeds } = this.props;
    return socialfeeds.map((val, idx) => {
      console.log(val);
      let video_description = val.snippet.description;
      let videoURL = `https://www.youtube.com/embed/${val.id.videoId}`;
      let fb_share_link = `https://www.facebook.com/sharer/sharer.php?u=${videoURL}`;
      let twitter_share_link = `https://twitter.com/intent/tweet?text=${videoURL}+${video_description}`;
      let gplus_share_link = `https://plus.google.com/share?url=${videoURL}`;
      return <div className="item" key={idx}>
        <div className="fts-mashup-post-wrap  fts-feed-type-youtube fts-mashup-media-top" style={{ padding: '0px !important', background: 'rgb(255, 255, 255) !important', width: '300px !important', margin: '7px !important' }}>
          <div className="fts-mashup-type-icon-spacer" />
          <div className="fts-mashup-image-and-video-wrap popup-gallery-twitter">
            <div className="fts-fluid-videoWrapper">
              <object width="100%" data={videoURL} className="p-3" frameBorder={0} allowFullScreen />
            </div>
          </div>
          <div className="fts-mashup-icon-wrap-right fts-mashup-youtube-icon">
            <a href="https://www.youtube.com/channel/UCpVm7bg6pXKo1Pr6k5kxG9A" target="_blank" title={val.snippet.title} aria-label="National Geographic youtube" />
          </div>
          <span className="fts-jal-fb-user-name">
            <a href="https://www.youtube.com/channel/UCpVm7bg6pXKo1Pr6k5kxG9A" target="_blank">{val.snippet.title}</a>
          </span>
          <span className="fts-jal-fb-post-time">20 hours ago</span>
          <div className="fts-mashup-description-wrap">{val.snippet.description}</div>
          <div className="fts-mashup-count-wrap">
            <div className="fts-share-wrap">
              <a href="javascript:;" className="ft-gallery-link-popup" />
              <div className="ft-gallery-share-wrap" style={{ display: 'none' }}>
                <a href={fb_share_link} target="_blank" className="ft-galleryfacebook-icon">
                  <i className="fa fa-facebook-square" />
                </a>
                <a href={twitter_share_link} target="_blank" className="ft-gallerytwitter-icon">
                  <i className="fa fa-twitter" />
                </a>
                <a href={gplus_share_link} target="_blank" className="ft-gallerygoogle-icon">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.youtube.com/watch?v=cqIQ-LS-DmM" target="_blank" className="ft-gallerylinkedin-icon">
                  <i className="fa fa-linkedin" />
                </a>
                <a href="mailto:?subject=Shared Link&body=https://www.youtube.com/watch?v=cqIQ-LS-DmM - Why do elephants have wrinkled skin? The intricate web of cracks and crevices that gives African elephants their distinctive look is, in fact, an essential..." target="_blank" className="ft-galleryemail-icon">
                  <i className="fa fa-envelope" />
                </a>
              </div>
            </div>
            <div className="fts-youtube-reply-wrap-left">
              <a href={videoURL} target="_blank">View on YouTube</a>
            </div>
            <div className="fts-clear" /></div>
        </div>
      </div>
    })
  }
  render() {
    return (
      <div className="row" id="masonry">
        {this.renderFeeds()}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  socialfeeds: state.socialfeeds,
})

const mapDispatchToProps = dispatch => ({
  // ... normally is an object full of action creators
  actions: bindActionCreators({ loadSocialFeeds }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connectToStore(Socialfeed);