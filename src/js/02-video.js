import '../css/common.css';
import Player from '@vimeo/player';
import { throttle } from 'lodash';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const onPlay = function (data) {
  const strigifyData = JSON.stringify(data);
  localStorage.setItem(TIME_KEY, strigifyData);
};
player.on('timeupdate', throttle(onPlay, 1000));

function resumePlayback() {
  if (JSON.parse(localStorage.getItem(TIME_KEY)) === null) {
    return;
  }
  const paused = JSON.parse(localStorage.getItem(TIME_KEY))['seconds'];
  if (paused) {
    player
      .setCurrentTime(paused)
      .then(function (seconds) {})
      .catch(function (error) {
        switch (error.name) {
          case 'Error':
            break;
          default:
            break;
        }
      });
  }
}
resumePlayback();
