//Create a new component. This component should produce some HTML
import _ from "lodash";
import React, {Component} from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from  "./components/search_bar";
import VideoList from  "./components/video_list";
import VideoDetail from  "./components/video_detail";

const API_KEY_YOUTUBE = "AIzaSyBFyx5H3waXZMkCS4ymZQwZMVb4uWzZVq0";


class App extends Component{

    constructor(props){
        super(props);

        this.state = {videos: [] , selectedVideo: null};

        this.videoSearch("dinamo");
    }

    videoSearch(search){
        console.log("search = ",search);
        YTSearch({key:API_KEY_YOUTUBE, term: search}, (videos) => {
            this.setState({videos : videos, selectedVideo: videos[0]}); // {videos : videos} //ES6
        });
    }

    render (){
        const videoSearch = _.debounce((search) => {this.videoSearch(search)}, 500)
        return <div>
        <SearchBar onSearchTextChanged = {videoSearch}/>
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList
            onVideoSelect={selectedVideo => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
        </div>
    }
}




//Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App/>, document.querySelector(".container"));
