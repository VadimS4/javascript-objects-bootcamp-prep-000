var playlist = {
  artist: 'song name'
};

function updatePlaylist(playlist, artistName, songTitle){
  
  playlist[artistName] = songTitle;
  return playlist;
  
}