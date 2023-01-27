var audio = document.getElementById("your-audio-id");
var playButton = document.querySelector(".container-play");
var pauseButton = document.getElementById("pause-button");

let pause = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-pause-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0v-3.5z"/>
</svg>`

let play = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16">
<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
<path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
</svg>`


let isPlaying = false;

playButton.addEventListener("click", function() {
  if (isPlaying) {
    playButton.innerHTML = play;
    isPlaying = false;
    audio.pause()
} else {
    playButton.innerHTML = pause;
    isPlaying = true;
    audio.play()
  }
});


// range lagu
var positionSlider = document.getElementById("position-slider");
positionSlider.value = 0;
positionSlider.max = audio.duration;

audio.addEventListener("timeupdate", function(){
    positionSlider.value = audio.currentTime;
});

let menitPlay = document.querySelector('.menit-play')
let menitEnd = document.querySelector('.menit-end')
function displayCurrentTime() {
    var currentTime = audio.currentTime;
    var minutes = Math.floor(currentTime / 60);
    var seconds = Math.floor(currentTime % 60);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    menitPlay.innerHTML = minutes + ":" + seconds;
}
setInterval(displayCurrentTime, 1000);



