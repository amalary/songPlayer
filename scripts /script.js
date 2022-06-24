const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist");
musicAudio = container.querySelector("#main-audio"),
playPauseBtn = container.querySelector(".play-pause");

let musicIndex = 2;

window.addEventListener("load", ()=> {

    loadMusic(musicIndex)
});

// function to load music 

function loadMusic(indexNumb){

    musicName.innerText = allMusic[indexNumb - 1].name
    musicArtist.innerText = allMusic[indexNumb - 1].artist
    musicImg.src = `images/${allMusic[indexNumb - 1].img}`
    musicAudio.src = `songs/${allMusic[indexNumb - 1].src}`

}

// Play or music button event 

playPauseBtn.addEventListener("click", ()=>{

    const isMusicPaused = containter.containts("paused");

    isMusicPaused ? pauseMusic() : playMusic(); 
})

