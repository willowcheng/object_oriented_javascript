var playlist = new Playlist();

var hereComesTheSun = new Song("Here Comes the Sun", "The Beatles", "2:54");
var walkingOnSunshine = new Song("Walking on Sunshine", "Katrina and the Waves", "3:43");

playlist.add(hereComesTheSun);
playlist.add(walkingOnSunshine);

var playlistElement = document.getElementById("playlist");

playlist.renderIn(playlistElement);

var playButton = document.getElementById("play");
playButton.onclick = function () {
    playlist.play();
    playlist.renderIn(playlistElement);
};

var nextButton = document.getElementById("next");
nextButton.onclick = function () {
    playlist.next();
    playlist.renderIn(playlistElement);
};

var stopButton = document.getElementById("stop");
stopButton.onclick = function () {
    playlist.stop();
    playlist.renderIn(playlistElement);
};