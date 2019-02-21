import React, { Component } from 'react'
import { loadPromotionalVideos } from '../../../actions/promotion';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import 'bootstrap/dist/css/bootstrap.css'


class Promotion extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    let { actions } = this.props;
    actions.loadPromotionalVideos(2);
  }
  renderVideos() {
    let { yt_videos } = this.props;
    return yt_videos.map((val, idx) => {
      let videoURL = `https://www.youtube.com/embed/${val.id.videoId}`;
      return <object width="420" height="315" data={videoURL} key={idx} className="col-sm-6"></object>
    })
  }
  render() {
    return (
      <div className="row mb-5">
        {this.renderVideos()}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  // ... computed data from state and optionally ownProps
  yt_videos: state.yt_videos,
})

const mapDispatchToProps = dispatch => ({
  // ... normally is an object full of action creators
  actions: bindActionCreators({ loadPromotionalVideos }, dispatch)
})

// `connect` returns a new function that accepts the component to wrap:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)

export default connectToStore(Promotion);