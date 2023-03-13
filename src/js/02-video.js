import Player from '@vimeo/player';
import { throttle } from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const saveCurrentTime = throttle(time => {
  localStorage.setItem(currentTimeKey, JSON.stringify(time));
}, 1000);

player.on(
  'timeupdate',
  throttle(function (time) {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(time));
  }, 1000)
);

const saveTime = localStorage.getItem('videoplayer-current-time');
// console.log(saveTime);
const timeStop = JSON.parse(saveTime);
// console.log(timeStop.seconds);

player.setCurrentTime(timeStop.seconds || 0);
