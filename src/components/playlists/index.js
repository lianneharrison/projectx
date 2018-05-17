import React, { Component } from 'react';
// import Rx from "rxjs";
import { get } from '../../utils/api';
// import logo from './logo.svg';
// import './Playlist.css';


class Playlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playlists: {
        items: []
      }
    }
  }

  componentDidMount() {
    get("https://api.spotify.com/v1/me/playlists")
      .then((data) => {
        console.log(data);
      this.setState({
        playlists: {
          items: data.response.items
        }
      });
    });
  }

  render() {
    console.log(this.state.playlists.items);
    return (
      <div className="playlist-wrapper">
      <h2> Your Playlists</h2>
        {this.state.playlists.items.map((playlist, index) => {
          return <img playlist={playlist.id} key={index} className="playlist-img" onClick={this.props.clickFunction} src={playlist.images[0].url}/>
        })}
      </div>
    );
  }
}

export default Playlist;
