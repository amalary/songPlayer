const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist");

let musicIndex = 1;

window.addEventListener("load", ()=> {

    loadMusic(musicIndex)

})
