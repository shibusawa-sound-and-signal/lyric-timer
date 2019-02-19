
window.init = ({songTitleElement, window}) => {
  let state = {};

  let redrawUI = () => {
    songTitleElement.innerText = state.songTitle || "No Song Playing";
  };


  window.onSpotifyWebPlaybackSDKReady = () => {
    const token = window.spotifyKey;
    window.player = new Spotify.Player({
      name: 'Web Playback SDK Quick Start Player',
      getOAuthToken: cb => {
        cb(token);
      }
    });
    // Error handling
    player.addListener('initialization_error', ({ message }) => { console.error("init failed"); });
    player.addListener('authentication_error', ({ message }) => { console.error("auth failed"); });
    player.addListener('account_error', ({ message }) => { console.error(message); });
    player.addListener('playback_error', ({ message }) => { console.error(message); });

    // Playback status updates
    player.addListener('player_state_changed', playerState => { console.log(playerState);
      state.songTitle = playerState.track_window.current_track.name;
      redrawUI();
    });

    // Ready
    player.addListener('ready', ({ device_id }) => {
      console.log('Ready with Device ID', device_id);
    });

    // Not Ready
    player.addListener('not_ready', ({ device_id }) => {
      console.log('Device ID has gone offline', device_id);
    });

    // Connect to the player!
    player.connect();


  };
};
