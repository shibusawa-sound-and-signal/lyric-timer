
# Lyric Timer

## Starting the Server

For now, start the static server of your choice

```
npm install -g http-server
http-server
```

## Create a secrets.js file
The contents of the file should look like this:

`window.spotifyKey = '[YOUR KEY]';` 

You can grab your own key from this page, which is also the entry point for the spotify Web Playback SDK tutorial: https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

It appears that these keys have short expiration times, so you may have to generate a new key each time you play with this code. After we have a [walking skeleton](http://wiki.c2.com/?WalkingSkeleton), we can look into automating the key retrieval using OAuth.

## Feature Backlog

- [X] Connect the sdk
- [X] Scaffold the UI
- [X] Show track and artist name onscreen (from spotify)
    - [X] Think about what to do about the waiting-to-connect state. Probably shouldn't show a different placeholder text at first ("~~~~~~ Song Artist / Title ~~~~~~") and later ("No Song Playing")
    - [X] Refactor to improve the state, clean up noise from the boilerplate
    - [ ] ~~Explore using settimeout / request animation frame to set up polling the player for state~~
        - [ ] show song position in seconds
- [ ] Tests??? (pull in Jasmine)
- [ ] Pull the lyrics out of the HTML and into a map: use spotify ID as key, lyrics as value
- [ ] Handle authentication failed error (`authentication_error Object { message: "Authentication failed" }`)
- [ ] periodically check the player state, and resync the play time from that (do a setInterval based on current playback time modulo 1000)
    - [ ] What about disconnecting, or changing tracks?
- [ ] UX for interacting with song timings

- [ ] Add a "Preview" button that moves bolding of words around with timing
- [ ] Download timings as JSON file
- [ ] Save timings in local state
- [ ] Use OAuth to get token at runtime
- [ ] do some experiments to see what the typical delay is between calling getPlayerState and getting the result of the promise
- [ ] consider doing some server-side analysis with the Spotify Web API to get approximations of verse/chorus timings via https://developer.spotify.com/documentation/web-api/reference-beta/#endpoint-get-audio-analysis