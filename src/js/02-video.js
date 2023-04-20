import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
let currentTime = 0;
const storageKey = 'videoplayer-current-time';

player.on('timeupdate', throttle(onGetTime, 1000));

function onGetTime(evt) {
    currentTime=evt.seconds;
  saveCurrentTime();
   
};
   function saveCurrentTime() {
  window.localStorage.setItem(storageKey, JSON.stringify(currentTime));
};

currentTimeParsed = JSON.parse(localStorage.getItem(storageKey));

player
  .setCurrentTime(currentTimeParsed)
  .then(function (seconds) {
      seconds = currentTimeParsed; 
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':

        break;
      default:

        break;
    }
  });


