let setupSpotifyDebugging = (player) => {
  let spotifyPlayerEvents = ['initialization_error',
    'authentication_error',
    'account_error',
    'playback_error',
    'ready',
    'not_ready'];

  spotifyPlayerEvents.forEach(event => {
      player.addListener(event, (eventMessage) => {
        console.log(event, eventMessage)
      });
    }
  );
};

window.init = ({songTitleElement, window}) => {
  let state = {
    songTitle: '(Waiting for Spotify Player to Connect)'
  };

  let draw = () => {
    songTitleElement.innerText = state.songTitle || "No Song Playing";
  };


  window.onSpotifyWebPlaybackSDKReady = () => {
    const token = window.spotifyKey;
    window.player = new Spotify.Player({
      name: 'Shibusawa Lyric Timer',
      getOAuthToken: cb => {
        cb(token);
      }
    });

    player.addListener('player_state_changed', playerState => { console.log(playerState);
      state.songTitle = playerState.track_window.current_track.name;
      // TODO: throws an error if playerState is null; playerState is null when player disconnects
      draw();
    });

    setupSpotifyDebugging(player);
    player.connect();
  };

  draw();
};
