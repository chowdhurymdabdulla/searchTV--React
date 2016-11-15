import _ from 'lodash'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import YTSearch from 'youtube-api-search'

const API_KEY = 'AIzaSyCk8gg0p0eCVMycTpLpRDk-zbteWZZE3z0'

const _querySelector = (querySelector) => document.querySelector(querySelector)
const container = _querySelector(".container")

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('Marvels movies')
    }

    videoSearch(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({videos: videos, selectedVideo: videos[0]});
            // this.setState({videos: data})
        })
    }

    render() {
      const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 700)
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>, container);
// ReactDOM.render(<App />, document.querySelector('.container'));
