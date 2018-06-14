import React, { Component } from 'react';
import './App.css';
import Playlist from './components/playlists';
import Songlist from './components/songlists';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlistId: null
    }
  }

  render() {
    return (
      <div className="App App-bg">
        <Playlist clickFunction={this.handleClick}/>
        <Songlist playlistID={this.state.playlistId}/>
      </div>
    );
  }

  handleClick = (e) => {
    var playlistId = e.target.getAttribute("playlist");
    console.log(playlistId);

    this.setState({playlistId: playlistId});

    const songlistWrapper = document.getElementById('songlist-wrapper');
    songlistWrapper.style.height = "auto";
    songlistWrapper.childNodes[0].style.display = "block";
  }
}

export default App;
