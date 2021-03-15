
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
    name:"Jaan nisaar",
    artist:"arijit ",
    link:"https://pl.meln.top/mr/d18e94060b3d457301b20d943acb9390.mp3?session_key=60c0058fb49537234044715aadae8cd8"
 },
    {
    name:"tujhe kitna chahne lage",
    artist:"jubin",
    link:"https://cdnm.meln.top/mx/Jubin Nautiyal - Tujhe Kitna Chahein Aur.mp3?hash=NDc0NDk5MzI5LzQ1NjM2NDc1My5tcDM="
 },
    {
    name:"teri muhabbat",
    artist:"jubin ",
    link:"https://dlserver.ru/?3uo-Wv6kd48ZhrGm98EPjcnJWUTM8LfpRvwMNvc9acYmmET9FK6YQQW-ixEWkIIUCJoYDWTyUPg2OYf3qt2x2TjHR8_rO-0ODMXKLQyFgouPZ7gvNl3aqg0q_y76mz8Oclkl5s5dVWdv5ZjyOYlNvw5yOWJsi49fO1nGBIYGJbxvUvDhTj8Pd84NKc9zlS17gqJ_ajRi0TgJeWoBJhJB5BNbPH7CU3usKr8dpPrCGm9E7C39oXQu27d06i6Nvi6PpVhKWa5d6gyuY36TIbDt74qtgek_r-n5AicvTyZKfPumOPc3J2C9QlcrpDOSkCz-ug9VB-DXqkvNZQu0w9oBLg==.mp3"
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
