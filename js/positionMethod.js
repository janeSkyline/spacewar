import {
  w,
  h,
  pixelWeigth,
} from './config';

exports.positionToXY = function (ps) {
  var x = ps % w;
  var y = Math.round((ps - x) / w);
  return {
    ps: ps,
    x: x * pixelWeigth + pixelWeigth / 2,
    //y: Math.round(y / h) * pixelWeigth,
    // y: Math.round(y / h) * window.innerHeight / h,
    y: y * window.innerHeight / h,
    __x: x,
    __y: y,
    limit: w * h - 1,
  };
}