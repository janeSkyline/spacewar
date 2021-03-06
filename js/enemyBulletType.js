import { w, h, pixelWeigth } from './config';
import {
  positionToXY,
  positionTosXsY,
  sXsYToPosition,
} from './positionMethod';

export default {
  normal: function (bulletPs, time) {
    var time = 45;
    var prePs = bulletPs;
    var count = time;
    return function (taPs,clear) {
      count--;
      var p0 = positionTosXsY(prePs);
      var p1 = positionTosXsY(prePs + w * h);
      var t = 1 / time * (time - count);

      var x = Math.round(p0.x + (p1.x - p0.x) * t);
      var y = Math.round(p0.y + (p1.y - p0.y) * t);

      var _p0 = positionToXY(prePs);
      var _p1 = positionToXY(prePs + w * h);
      var t = 1 / time * (time - count);
      var realX = _p0.x + (_p1.x - _p0.x) * t;
      var realY = _p0.y + (_p1.y - _p0.y) * t;

      if(clear){
        time = null;
        prePs = null;
        count = null;
      }
      return {
        position: sXsYToPosition(x, y),
        x: realX,
        y: realY,
        look: 'laser',
        w: 20,
        h: 60,
        clear: count < -1,
      }
    }
  },
  track: function (bulletPs,clear) {
    var prePs = bulletPs;
    var time;
    var count;
    var p1 = null;
    var _p1 = null;
    return function (taPs) {
      var p0 = positionTosXsY(prePs);
      if (!p1){
        p1 = positionTosXsY(taPs);
        time = Math.floor(Math.sqrt( (p0.x-p1.x) *(p0.x-p1.x) + (p0.y-p1.y)*(p0.y-p1.y) )*2);
        count = time - 1;
      } 
      var t = 1 / time * (time - count);
      var x = Math.round(p0.x + (p1.x - p0.x) * t);
      var y = Math.round(p0.y + (p1.y - p0.y) * t);

      var _p0 = positionToXY(prePs);
      var marginX = pixelWeigth / 2;
      var marginY = 0;

      if (!_p1) _p1 = positionToXY(taPs);
      var realX = (_p0.x + marginX + (_p1.x - _p0.x + marginX) * t);
      var realY = (_p0.y + marginY + (_p1.y - _p0.y + marginY) * t);
      count--;

      if(clear){
        time = null;
        prePs = null;
        count = null;
        p1 = null;
        _p1 = null;
      }

      return {
        position: sXsYToPosition(x, y),
        x: realX,
        y: realY,
        look: 'bulletBall',
        w: 15,
        h: 15,
        clear: count < -15 || x < 0 || x > w - 1,
      }
    }
  },
}