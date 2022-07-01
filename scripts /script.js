//  Adding tags and Elements 

const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector("#main-audio"); 
playpaueBtn = container.querySelector(".play-pause")


let musicIndex = 6; 

window.addEventListener("load", ()=> {
    loadMusic(musicIndex)
}); 

// Function to load the music 

function loadMusic(IndexNum){

    musicName.innerText = allMusic[IndexNum - 1].name;
    musicArtist.innerText = allMusic[IndexNum - 1].artist;
    musicImg.src = `images/${allMusic[IndexNum - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[IndexNum - 1].src}.mp3`;




}; 


// Playing music function 

function playMusic(){
    container.classList.add('paused');
    playpaueBtn.querySelector("i").innerText = "pause"
    mainAudio.play()
};

// Playing music function 

function pauseMusic(){
    container.classList.remove('paused');
    playpaueBtn.querySelector("i").innerText = "play_arrow"
    mainAudio.pause()
};
// play or pause music button event

playpaueBtn.addEventListener("click", ()=>{

    const isMusicPaused = container.classList.contains("paused");

    isMusicPaused ? pauseMusic() : playMusic()
    
});

//  Next song button 

