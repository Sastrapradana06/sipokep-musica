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

// efek love 
let loveAktif = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-heart-fill love" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg>`

let loveNon = `<svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
</svg>`

let iconsLove = document.querySelector('.icons-love')
iconsLove.addEventListener('click', (e) => {
    if(e.target.className == 'bi-heart') {
        iconsLove.innerHTML = loveNon;
    } else{
        iconsLove.innerHTML = loveAktif;
    }
})


















