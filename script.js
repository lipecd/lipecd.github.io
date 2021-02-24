var fire = document.getElementById("fireAudio")
var fireButton = document.getElementById("firebtn")
var rain = document.getElementById("rainAudio")
var rainButton = document.getElementById("rainbtn")
var jazz = document.getElementById("jazzAudio")
var jazzButton = document.getElementById("jazzbtn")


function playFire() {
    if (fire.paused) {
        fire.play();
        fireButton.style.backgroundColor = "rgb(250, 145, 118)";
        
    }
    else{
        fire.pause();
        fireButton.style.backgroundColor = "rgb(231, 231, 231)";
        
    }
}


function playRain() {
    if (rain.paused) {
        rain.play();
        rain.volume = 0.1;
        rainButton.style.backgroundColor = "rgb(250, 145, 118)";        
    }
    else{
        rain.pause();
        rainButton.style.backgroundColor = "rgb(231, 231, 231)";
        
    }
}

function playJazz() {
    if (jazz.paused) {
        jazz.play();
        jazz.volume = 0.3;
        jazzButton.style.backgroundColor = "rgb(250, 145, 118)";        
    }
    else{
        jazz.pause();
        jazzButton.style.backgroundColor = "rgb(231, 231, 231)";
        
    }
}