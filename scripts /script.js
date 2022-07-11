//  Adding tags and Elements 

const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector("#main-audio"); 
playpauseBtn = container.querySelector(".play-pause"),
nextBtn = container.querySelector("#next"),
prevBtn = container.querySelector("#prev"),
progressArea = container.querySelector(".progress-area"),
progressBar = container.querySelector(".progress-bar"),
musicList = container.querySelector(".music-list"),
moreMusicBtn = container.querySelector("#more-music"),
closeMusicBtn = container.querySelector("#close");



let musicIndex = 1; 

window.addEventListener("load", ()=> {
    loadMusic(musicIndex)
}); 

// Function to load the music 

function loadMusic(IndexNum){

    musicName.innerText = allMusic[IndexNum - 1].name;
    musicArtist.innerText = allMusic[IndexNum - 1].artist;
    musicImg.src = `images/${allMusic[IndexNum - 1].img}.jpg`;
    mainAudio.src =`songs/${allMusic[IndexNum - 1].src}.mp3`;
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
    // If music index is greater than the length of the array then the index will be set back to one 
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic(); 

};

// Prev song function

function prevMusic(){
    musicIndex--; // musicIdex decrements by 1 
     // If music index is less than the length of the array then the index will be set back to one 
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic(); 

};
// play or pause music button event

playpauseBtn.addEventListener("click", ()=>{

    const isMusicPaused = container.classList.contains("paused");

    isMusicPaused ? pauseMusic() : playMusic()
    
});

//  Next song button

nextBtn.addEventListener("click", ()=>{
    nextMusic()
});

// Prev song button 

prevBtn.addEventListener("click", ()=>{
    prevMusic()

});

// Update progressbar as song plays 

mainAudio.addEventListener("timeupdate", (e) =>{
    const currentTime = e.target.currentTime; //getting time of song as it's being played 
    const duration = e.target.duration // Getting the suration time of a whole song 
    let progressWidth = (currentTime /duration) * 100; 
    progressBar.style.width = `${progressWidth}%`;

    let musicCurrentTime = container.querySelector(".current-time"),
    musicDuration = container.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", ()=>{

    // update song total duration 

    let mainAdDuration = mainAudio.duration; 
    let totalMin = Math.floor(mainAdDuration / 60);
    let totalSec = Math.floor(mainAdDuration % 60); 

    if(totalSec < 10 ){ // if total sec is less than 10 add a 0 before it 
        totalSec = `0${totalSec}`; 
    }
    musicDuration.innerText = `${totalMin}:${totalSec}`;

    });

     // update song current duration
    
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60); 

     if(currentSec < 10 ){ // if total sec is less than 10 add a 0 before it 
        currentSec = `0${currentSec}`; 
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;

    });

// update playing song current time as the song progresses 
    

progressArea.addEventListener("click", (e)=>{

    let progressWidth = progressArea.clientWidth // getting width of progress bar 
    let clickedOffsetX = e.offsetX; // grabbing the offset value of x 
    let songDuration = mainAudio.duration; // getting the totalt song duration 

    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration; 
    playMusic();

}); 


// change the loop, shuffle, and repat icon onclick

const repeatBtn = container.querySelector("#repeat-plist");

repeatBtn.addEventListener("click", ()=>{

    let getText = repeatBtn.innerText //grabbing the tag innerText 

    switch(getText){
        case "repeat":
            repeatBtn.innerText = "repeat_one"; 
            repeatBtn.setAttribute("title", "song looped");
            break;
        
        case "repeat_one":
            repeatBtn.innerText = "shuffle"; 
            repeatBtn.setAttribute("title", "playback shuffled");
            break;
        case "shuffle":
            repeatBtn.innerText = "repeat"; 
            repeatBtn.setAttribute("title", "Playlist looped");
            break;
                
    }

});

// Above button is changed now working on after song is finished 

mainAudio.addEventListener("ended", ()=>{

    let getText = repeatBtn.innerText; //getting tags innerText 

    switch(getText){
        case "repeat":
            nextMusic() //calling the nextMusic function 
            break; 

        
        case "repeat_one":
            mainAudio.currentTime = 0; // This sets the current time of the song to 0 
            loadMusic(musicIndex);
            playMusic(); //after loading the song youre now able to play it 
            break;
        case "shuffle":
            let randIndex = Math.floor((Math.random() * allMusic.length) + 1); 

            do{
                randIndex = Math.floor((Math.random() * allMusic.length) + 1); 
            }while (musicIndex == randIndex) // Loop will run until the next random interger is not the same as the current one in musicIdex 
            musicIndex = randIndex // MusicIdex will now be set to the value of randIndex 
            loadMusic(musicIndex)
            playMusic();
            break;
                
    }
})

//Display the music list 

moreMusicBtn.addEventListener("click",() => {
    musicList.classList.toggle("show");
});

closeMusicBtn.addEventListener("click",() => {
    moreMusicBtn.click()
});


// li tags according to the length of the allMusic array 

const ulTag = container.querySelector("ul");

for(let i = 0; i < allMusic.length; i++){
    let liTag =
    `
    <li li-index = "${i}">
    <div class="row">
        <span>${allMusic[i].name}</span>
        <p>${allMusic[i].artist}</p>
    </div>
    <audio class = "${allMusic[i].src}" src ="songs/${allMusic[i].src}.mp3" ></audio>
    <span id = "${allMusic[i].src}" class="audio-duration">1:45</span>
    </li>`;


    ulTag.insertAdjacentHTML("beforeend", liTag);




    // let liAudioDurationTag = ulTag.querySelector(`#${allMusic[i].src}`);
    // let liAudioTag = ulTag.querySelector(`.${allMusic[i].src}`);
    
    //Fix this feature after the project is over 


    // liAudioTag.addEventListener("loadeddata", ()=>{

    // let duration = liAudioTag.duration; 
    // let totalMin = Math.floor(duration / 60);
    // let totalSec = Math.floor(duration % 60); 

    // if(totalSec < 10 ){ // if total sec is less than 10 add a 0 before it 
    //     totalSec = `0${totalSec}`; 
    // }
    // liAudioDurationTag.innerText = `${totalMin}:${totalSec}`;

    // })

}


// Playing a specific song from the music list 

const allLiTags = ulTag.querySelectorAll('li'); 

for( let j = 0; j < allLiTags.length; j++){// on click attribute added to all of the li tags 

    //if there is an li tag that has an index equal to the musicIndex 
    //then this music is playing now and we can style it 

    if(allLiTags[j].getAttribute("li-index") == musicIndex){
        allLiTags[j].classList.add("playing")
    }

    allLiTags[j].setAttribute("onclick", "clicked(this)")
};

function clicked(element){
    // grab the index of a song clicked to then be played 

    let getLiIndex = element.getAttribute("li-index"); 
     musicIndex = getLiIndex //passing the index of the element clicked as the musicIndex 
    loadMusic(musicIndex);
    playMusic();
}







