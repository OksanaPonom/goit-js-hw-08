import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime;
const storageKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(onGetTime, 1000));

function onGetTime(evt) {
    currentTime=evt.seconds;
  saveCurrentTime();
   
};
   function saveCurrentTime() {
  localStorage.setItem(storageKey, JSON.stringify(currentTime));
};

const currentTimeParsed = JSON.parse(localStorage.getItem(storageKey))||0;

player.setCurrentTime(currentTimeParsed);
 


