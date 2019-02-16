
# Lyric Timer

## Starting the Server

For now, start the static server of your choice

`npm install -g http-server`
`http-server`

## Create a secrets.js file
The contents of the file should look like this:

`window.spotifyKey = '[YOUR KEY]';` 

You can grab your own key from this page, which is also the entry point for the spotify Web Playback SDK tutorial: https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

It appears that these keys have short expiration times, so you may have to generate a new key each time you play with this code. After we have a [walking skeleton](http://wiki.c2.com/?WalkingSkeleton), we can look into automating the key retrieval using OAuth.

## Feature Backlog

- [ ] Connect the sdk 
- [ ] Scaffold the UI
- [ ] Show track and artist name onscreen (from spotify)
- [ ] Show lyrics onscreen
- [ ] Show a word bolded (first word, first line)
- [ ] Up down left right moves to next word in that direction 
- [ ] Large button/Space bar creates a timing indicator above word

- [ ] Add a "Preview" button that moves bolding of words around with timing
- [ ] Download timings as JSON file
- [ ] Save timings in local state
- [ ] Use OAuth to get token at runtime