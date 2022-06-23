const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist");

let musicIndex = 3;

window.addEventListener("load", ()=> {

    loadMusic(musicIndex)
});

// function to load music 

function loadMusic(indexNumb){

    musicName.innerText = allMusic[indexNumb - 1].name

}
