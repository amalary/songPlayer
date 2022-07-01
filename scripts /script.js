//  Adding tags and Elements 

const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"); 


let musicIndex = 5; 

window.addEventListener("load", ()=> {
    loadMusic(musicIndex)
}); 

// Function to load the music 

function loadMusic(IndexNum){

    musicName.innerText = allMusic[IndexNum - 1].name
    musicArtist.innerText = allMusic[IndexNum - 1].artist

}

