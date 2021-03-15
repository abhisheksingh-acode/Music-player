
const title = document.querySelector(".title");
const container = document.querySelector(".container");
const artist = document.querySelector(".artist");
const playBtn = document.querySelector(".play");
const preBtn = document.querySelector(".back");
const nextBtn = document.querySelector(".next");
const thumbnail = document.querySelector(".thumbnail");
const faPlay = document.querySelector(".fa-play");
const audio  = document.querySelector("audio");



 let musicList = [
    {
    name:"tum bin",
    artist:"shreya ",
    link:"https://pl.meln.top/mr/a2be8d53e90ca6e33b844dd9c858a838.mp3?session_key=440fd92a0416f4be718338eb225a5ae5"
 },
    {
    name:"closer",
    artist:"taylor swift ",
    link:"https://cdnm.meln.top/mr/Taylor%20Swift%20-%20closure.mp3?session_key=13aaa12b6a0394bf3cbc28ea4eb4cde9&hash=24038c3d6339145a75e5a068282f534d"
 },
    {
    name:"random",
    artist:"arijit singh ",
    link:"https://dlserver.ru/?3uo-Wv6kd48ZhrGm98EPjcnJWUTM8LfpRvwMNvc9acYgnEr3FameShvzkGcQk9I3YKc5EDr5T9Y3KZSS8f6561nFFKn_MMAWF-zZLVCcjO_HXKsbf1DMzAE2rDjmpQQCQXIb9JtmYA5rza3JV65Zm3pialtuqaJLfFHuFecVGchMf8j8bSBqb_hyVroatEZmrIMZOAZ15DY5bE9xRDtN1iQ-FXDTbHqvQpYShcLaLCwMzxeAkFQU3Yxr8B68qRfaoHFRY4xvkFCyT0GAVb3PnqqClY134fHlCic1TztCZ-inbP0ifyGgQxthrjOC4mzsvlYZAfzTphGOcxbzit9caZV2b9_dUI_PdAzTSGPRrbJv2c_8CNuvsEYxTg==.mp3"
 },
    {
    name:"Binte dil",
    artist:"arijit singh ",
    link:"https://dlserver.ru/?3uo-Wv6kd48ZhrGm98EPjcnJWUTM8LfpRvwMNvc9acYmn0_yFKydSgS-pHcksLFuOcQGJFKRb-4yNIuBl5eN4Q26ac7zD-0QANb-BQz9iu7of7cEXn_f3g04ykTutj8mfVck994dVGRnyZrIdIhMlhJWAXBVi4lfN3jDOeF4EeBFcunDRhsVEesJM6to3iB5vKh6VlZI4QEkB21nIlt59wQhE1jSYUyhTbkl0MTfIDIZ-x39jE8v8MRZ9zKgoC-k3lhgS59c9nmhV2PnD-v0mI3ggZ47r-L-CSQoFmVYYOGoKbsyZGihURsipGSUoGm0vRIWB_CUqwzPLR7vhN0YadFxad6XVcDeSkDZTGGdra4s1Y_2BMjn8EoeVdgTAsJw2-w0ANCHHwPvLO0S.mp3"
 }
]

  let status = true;
function playMusic(){
   audio.play()
   status = false;
    thumbnail.classList.add("rotator");
    container.classList.add("colorChange")
    faPlay.classList.replace("fa-play","fa-pause");
}

function pauseMusic(){
    status = true; 
    thumbnail.classList.remove("rotator");
    container.classList.remove("colorChange")
    faPlay.classList.replace("fa-pause", "fa-play");
    audio.pause()
}
const toggleMusic = () =>{
   (status)?playMusic():pauseMusic()
}


playBtn.addEventListener("click", toggleMusic);


let i = 0;
const nextsong = () =>{
   (i<musicList.length-1)? i++ :i = 0 
  audio.src = musicList[i].link;
  title.innerText = musicList[i].name;
  artist.innerText = musicList[i].artist;
   playMusic()
}

const prevsong = () =>{
   (i>0)? i-- :i = 3
   audio.src = musicList[i].link;
   title.innerText = musicList[i].name;
   artist.innerText = musicList[i].artist;
    playMusic()
}

audio.addEventListener("timeupdate", (event)=>{
   const currentTime = document.querySelector(".currentTime");
   const musicLength = document.querySelector(".duration");
   const progress = document.querySelector(".progress-bar");
   let duration = event.srcElement.duration;
   let CurrentDuration = event.srcElement.currentTime;
   


   let mincurrenTime = Math.floor(CurrentDuration/60);
   let seccurrenTime = Math.floor(CurrentDuration%60);

   currentTime.innerHTML = mincurrenTime+"."+seccurrenTime;
   
   let minduration = Math.floor(duration/60);
   let secduration = Math.floor(duration%60);
   if(duration){
   musicLength.innerHTML = minduration +"."+secduration;
   }
   progress.style.width = ((event.srcElement.currentTime)/(event.srcElement.duration))*100+"%"
});
preBtn.addEventListener("click", prevsong);
nextBtn.addEventListener("click", nextsong);
