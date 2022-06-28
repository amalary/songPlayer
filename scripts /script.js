const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
musicAudio = container.querySelector("#main-audio"),
playPauseBtn = container.querySelector(".play-pause"),
nextBtn = container.querySelector("#next"),
prevBtn = container.querySelector("#prev");

let musicIndex = 1;



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

// Music paused function 

function pauseMusic(){
    container.classList.remove("paused")
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause()
};


// Next music function 

function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex
    loadMusic(musicIndex);
    playMusic()
};
// Prev music function 

function nextMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex
    loadMusic(musicIndex);
    playMusic()
};

// Play or music button event 

playPauseBtn.addEventListener("click", ()=>{

    const isMusicPaused = container.classList.contains("paused");

    isMusicPaused ? pauseMusic() : playMusic(); 

});


// Next button event 

nextBtn.addEventListener("click", ()=>{
    nextMusic(); 

});

// Pre button 


prevBtn.addEventListener("click", ()=>{
    nextMusic(); 

});








