//  Adding tags and Elements 

const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector("#main-audio"); 
playpauseBtn = container.querySelector(".play-pause"),
nextBtn = container.querySelector("#next"),
prevBtn = container.querySelector("#prev")


let musicIndex = 1; 

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
    playpauseBtn.querySelector("i").innerText = "pause"
    mainAudio.play()
};

// Pausing music function 

function pauseMusic(){
    container.classList.remove('paused');
    playpauseBtn.querySelector("i").innerText = "play_arrow"
    mainAudio.pause()
};

// Next song function

function nextMusic(){
    musicIndex++; // musicIdex increments by 1 
    loadMusic(musicIndex);
    playMusic(); 

}

// Prev song function

function prevMusic(){
    musicIndex--; // musicIdex decrements by 1 
    loadMusic(musicIndex);
    playMusic(); 

}
// play or pause music button event

playpauseBtn.addEventListener("click", ()=>{

    const isMusicPaused = container.classList.contains("paused");

    isMusicPaused ? pauseMusic() : playMusic()
    
});

//  Next song button

nextBtn.addEventListener("click", ()=>{
    nextMusic()
})

// Prev song button 

prevBtn.addEventListener("click", ()=>{
    prevMusic()

})

