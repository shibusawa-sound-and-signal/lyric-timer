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

let formatMilliseconds = ms => {
  let totalSeconds = Math.floor((ms / 1000));
  let minutes = Math.floor(totalSeconds/60);
  let seconds = (totalSeconds % 60).toString().padStart(2, '0');
  return `${minutes}:${seconds}`;
};

window.init = ({songTitleElement, songPositionElement, window}) => {
  let state = {
    songTitle: '(Waiting for Spotify Player to Connect)',
    playbackTime: 0
  };

  let draw = () => {
    songTitleElement.innerText = state.songTitle || "No Song Playing";
    songPositionElement.innerText = formatMilliseconds(state.playbackTime);
  };


  function updateFromPlayerState(playerState) {
    state.songTitle = playerState.track_window.current_track.name;
    state.playbackTime = playerState.position;
    console.log(state);
    // TODO: throws an error if playerState is null; playerState is null when player disconnects
  }

  function listenForNextUpdate(player) {
    setInterval(() => {
      player.getCurrentState().then(playerState => {
        updateFromPlayerState(playerState);
        draw();
        listenForNextUpdate(player);
      });
    }, 100);
  }

  window.onSpotifyWebPlaybackSDKReady = () => {
    window.player = new Spotify.Player({
      name: 'Shibusawa Lyric Timer',
      getOAuthToken: cb => {
        cb(window.spotifyKey);
      }
    });

    // player.addListener('player_state_changed', playerState => {
    //   updateFromPlayerState(playerState);
    //   draw();
    // });

    listenForNextUpdate(player);
    setupSpotifyDebugging(player);
    player.connect();
  };

  draw();
};
