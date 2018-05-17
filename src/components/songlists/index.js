import React, { Component } from 'react';
import Rx from 'rxjs';
import { get } from '../../utils/api';

class Songlist extends Component {
    constructor(props) {
      super(props);
      this.state = {
        tracks: []
      }
    }

  componentWillReceiveProps(newProps) {
    get(`https://api.spotify.com/v1/users/lianneharrison2010/playlists/${newProps.playlistId}/tracks`)
      .then((data) => {
        console.log(data);
      this.setState({
        tracks: data.response.items
      });
    });
  }

  render() {
    return (
      <div id="songlist-wrapper" className="songlist-wrapper">
        <div className="songlist">
          <h2>Songs</h2>
            {this.state.tracks.map(function(song){
              console.log(song);
              return <div className="song-name">{song.track.name}</div>
            })}
        </div>
      </div>
    );
  }
}

export default Songlist;
