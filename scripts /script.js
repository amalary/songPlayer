const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist");
musicAudio = container.querySelector("#main-audio"),
playPauseBtn = container.querySelector(".play-pause");
nextBtn = container.querySelector("#next");
prevBtn = container.querySelector("#prev");

let musicIndex = 2;

window.addEventListener("load", ()=> {

    loadMusic(musicIndex)
});

// function to load music 

function loadMusic(indexNumb){

    musicName.innerText = allMusic[indexNumb - 1].name
    musicArtist.innerText = allMusic[indexNumb - 1].artist
    musicImg.src = `images/${allMusic[indexNumb - 1].img}`
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}`

}

function playMusic(){
    container.classList.add("paused")
    playPauseBtn.querySelector("i").innerText = "pause"
    mainAudio.play()
}

function pauseMusic(){
    container.classList.add("paused")
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause()
}

// Play or music button event 

playPauseBtn.addEventListener("click", ()=>{

    const isMusicPaused = container.classList.contains("paused");

    isMusicPaused ? pauseMusic() : playMusic(); 
});


// Next button event 

playPauseBtn = container.querySelector(".play-pause");








