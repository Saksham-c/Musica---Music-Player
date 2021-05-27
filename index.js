var audio1 = document.getElementById("audio-1");
var audio2 = document.getElementById("audio-2");
var audio3 = document.getElementById("audio-3");
var rangeBar = document.getElementById("myRange");
var increaseRangeValueFunc;
var rangeBarValue = rangeBar.value;
var timeDisplay = document.getElementById("time-display").innerHTML;
var x = 60;
var y = 120;
var z = 180;
var rangeBarVal2 = rangeBar.value - 120;
var rangeBarVal3 = rangeBar.value - 180;
var songNum = 3;
var isPlaying = false;

var inTheEnd = {
  songName : "In The End",
  artistName : "Linkin Park",
  albumCover : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbknzCHnZSpqb7AcAmObldz7hnF5Zo6tNLyA&usqp=CAU')",
  duration : 218
};
var countOnMe = {
  songName : "Count On Me",
  artistName : "Bruno Mars",
  albumCover : "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx9KGfpU574zey4XhWhStHZWvbgKVVv9kZEQ&usqp=CAU')",
  duration : 197
};

var darkside = {
  songName : "Darkside",
  artistName : "Alan Walker",
  albumCover: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjOtD4793UX8_jlJtRqcE0q_N2YRZQbj0Bg&usqp=CAU')",
  duration : 212
};

setInterval(function(){
  if(songNum == 1){
    document.getElementById("song-name-txt").innerHTML = inTheEnd.songName;
    document.getElementById("artist-name-txt").innerHTML = inTheEnd.artistName;
    document.getElementById("album-cover").style.backgroundImage = inTheEnd.albumCover;
    document.getElementById("myRange").max = inTheEnd.duration;
  }
  
  if(songNum == 2){
    document.getElementById("song-name-txt").innerHTML = countOnMe.songName;
    document.getElementById("artist-name-txt").innerHTML = countOnMe.artistName;
    document.getElementById("album-cover").style.backgroundImage = countOnMe.albumCover;
    document.getElementById("myRange").max = countOnMe.duration;
  }
  if(songNum == 3){
    document.getElementById("song-name-txt").innerHTML = darkside.songName;
    document.getElementById("artist-name-txt").innerHTML = darkside.artistName;
    document.getElementById("album-cover").style.backgroundImage = darkside.albumCover;
    document.getElementById("myRange").max = darkside.duration;
  }
}, 100)


console.log(audio1.innerHTML);

document.getElementById("time-display").innerHTML = rangeBar.value;

function increaseRangeValue() {
 increaseRangeValueFunc = setInterval(function(){ 
    rangeBar.value++;
     }, 1000);
}
function stopIncreasingRangeValue() {
  clearInterval(increaseRangeValueFunc);
}

function musicPlay(){
  if(songNum == 1){
    if(!isPlaying){
    document.getElementById("icon-pause").style.display = "inline";
    document.getElementById("icon-play").style.display = "none";
    audio1.play();
    increaseRangeValue();
    isPlaying = true;
  }
  }
  else if(songNum == 2){
    if(!isPlaying){
    document.getElementById("icon-pause").style.display = "inline";
    document.getElementById("icon-play").style.display = "none";
    audio2.play();
    increaseRangeValue();
    isPlaying = true;
  }
  }
  else if(songNum == 3){
    if(!isPlaying){
    document.getElementById("icon-pause").style.display = "inline";
    document.getElementById("icon-play").style.display = "none";
    audio3.play();
    increaseRangeValue();
    isPlaying = true;
  }
  }
} 

function musicPause(){ 
if(songNum == 1){
  if(isPlaying){
  document.getElementById("icon-pause").style.display = "none";
  document.getElementById("icon-play").style.display = "inline";
  audio1.pause();
  stopIncreasingRangeValue();
  isPlaying = false;  
  }
}
else if(songNum == 2){
  if(isPlaying){
  document.getElementById("icon-pause").style.display = "none";
  document.getElementById("icon-play").style.display = "inline";
  audio2.pause();
  stopIncreasingRangeValue();
  isPlaying = false;  
  }
}
else if(songNum == 3){
  if(isPlaying){
  document.getElementById("icon-pause").style.display = "none";
  document.getElementById("icon-play").style.display = "inline";
  audio3.pause();
  stopIncreasingRangeValue();
  isPlaying = false;  
  }
}
}
function prevSongPlay(){
 document.getElementById("icon-pause").style.display = "none";
 document.getElementById("icon-play").style.display = "inline";
 rangeBar.value = 0;
  if (songNum == 1){
    songNum = 3;
    audio1.pause();
    stopIncreasingRangeValue();
  isPlaying = false;  
  audio3.currentTime = 0;
 } else if (songNum == 2){
    songNum = 1;
    audio2.pause();
    stopIncreasingRangeValue();
  isPlaying = false;  
  audio1.currentTime = 0;
  } else if (songNum == 3){
    songNum = 2;
    audio3.pause();
    stopIncreasingRangeValue();
  isPlaying = false;  
  audio2.currentTime = 0;
  }
  musicPlay();
} 

function nextSongPlay(){
 document.getElementById("icon-pause").style.display = "none";
 document.getElementById("icon-play").style.display = "inline";
 rangeBar.value = 0;
  if (songNum == 1){
    songNum = 2;
    audio1.pause();
    stopIncreasingRangeValue();
  isPlaying = false;  
  audio2.currentTime = 0;
 } else if (songNum == 2){
    songNum = 3;
    audio2.pause();
    stopIncreasingRangeValue();
  isPlaying = false;  
  audio3.currentTime = 0;
  } else if (songNum == 3){
    songNum = 1;
    audio3.pause();
    stopIncreasingRangeValue();
  isPlaying = false;  
  audio1.currentTime = 0;
  }
  musicPlay();
} 

function changeTime(){
  console.log(rangeBar.value);
  audio1.currentTime = rangeBar.value;
  audio2.currentTime = rangeBar.value;
  audio3.currentTime = rangeBar.value;
}
setInterval(function(){
  var rangeBarVal1 = rangeBar.value - x;
  var rangeBarVal2 = rangeBar.value - y;
  var rangeBarVal3 = rangeBar.value - z;
  
  if(rangeBar.value <= 9){
    document.getElementById("time-display").innerHTML = "00:0"+ rangeBar.value;
  }
  if(rangeBar.value >= 9 && rangeBar.value <= 59){
    document.getElementById("time-display").innerHTML = "00:"+ rangeBar.value;
  }
  if(rangeBar.value >= 60 && rangeBar.value <= 69){
    document.getElementById("time-display").innerHTML = "01:0"+ rangeBarVal1;
  }
  if(rangeBar.value >= 70 && rangeBar.value <= 120){
    document.getElementById("time-display").innerHTML = "01:"+ rangeBarVal1;
  }
  if(rangeBar.value >= 120 && rangeBar.value <= 129){
    document.getElementById("time-display").innerHTML = "02:0"+ rangeBarVal2;
  }
  if(rangeBar.value >= 130 && rangeBar.value <= 180){
    document.getElementById("time-display").innerHTML = "02:"+ rangeBarVal2;
  }
  if(rangeBar.value >= 180 && rangeBar.value <= 189){
    document.getElementById("time-display").innerHTML = "03:0"+ rangeBarVal3;
  }
  if(rangeBar.value >= 190){
    document.getElementById("time-display").innerHTML = "03:"+ rangeBarVal3;
  }
}, 1000)