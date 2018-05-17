import React, { Component } from 'react';
import './App.css';
import Playlist from './components/playlists';
import Songlist from './components/songlists';

class App extends Component {
  render() {
    return (
      <div className="App App-bg">
        <Playlist clickFunction={this.handleClick}/>
        <Songlist playlistID="0lD49WMH3ajDjehYHJRs5U"/>
      </div>
    );
  }

  handleClick = (e) => {
    var playlistId = e.target.getAttribute("playlist");
    console.log(playlistId);
    const songlistWrapper = document.getElementById('songlist-wrapper');
    songlistWrapper.style.height = "auto";
    songlistWrapper.childNodes[0].style.display = "block";
  }
}

export default App;
