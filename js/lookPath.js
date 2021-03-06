import {
  w,
  h
} from './config';

import {
  ezPosition,
  positionTosXsY,
  sXsYToPosition,
  touchScope,
  ezPositionWithCheckScope
} from './positionMethod';

function circle(x, y, r, all, now, margin) {
  var ang = Math.PI * 2 / all;
  var _margin = 2 * Math.PI / 360 * (margin || 0);
  var _x = Math.round(x + r * Math.cos(ang * now + _margin));
  var _y = Math.round(y + r * Math.sin(ang * now + _margin));
  return {
    position: sXsYToPosition(_x, _y),
    outScope: _x < 0 || _x > w - 1 || _y < 0 || _y > h - 1,
  }
}

function circleMap() {
  var renCount = 0;
  return function (ps, getmap) {
    var p0 = positionTosXsY(ps);
    var pointLength = 8;
    var rs = [];
    for (var i = 0; i <= pointLength; i++) {
      var psData = circle(p0.x, p0.y, 5, pointLength, i, Math.round(renCount / 20));
      !psData.outScope && rs.push({ ps: psData.position, brickType: '0' });
    }
    if (!getmap) renCount++;
    return rs;
  }
}

export default {
  'zark': function (ps) {
    var xy = ezPositionWithCheckScope(ps);
    var rs = [{ ps: xy(0, 0), brickType: '0' }];
    if (ps % w !== w - 1) {
      rs.push({ ps: xy(1, -1), brickType: '0' });
    }
    if (ps % w !== 0 || ps == 0) {
      rs.push({ ps: xy(-1, -1), brickType: '0' });
    }
    return rs;
  },
  'fort': function (ps) {
    var xy = ezPositionWithCheckScope(ps);
    var rs = [{ ps: xy(0, 0), brickType: '0' }];
    if (ps % w !== w - 1) {
      rs.push({ ps: xy(1, -1), brickType: '0' });
    }
    if (ps % w !== 0 || ps == 0) {
      rs.push({ ps: xy(-1, -1), brickType: '0' });
    }
    if (ps - 2 * w > 0) {
      rs.push({ ps: xy(0, -2), brickType: '0' });
    }
    return rs;
  },
  'point': function (ps) {
    return [ps];
  },
  'hp+': function (ps) {
    var rs = [];
    if (ps % w - 1 > 0) {
      rs = [...rs, (ps - w) - 1, (ps + w) - 1];
    }
    if (ps % w + 1 < w) {
      rs = [...rs, (ps - w) + 1, (ps + w) + 1];
    }
    return rs;
  },
  'SPIDER': function (ps) {
    var xy = ezPosition(ps);
    var rs = [xy(0, 0)];
    if (ps % w !== w - 1) {
      rs = [...rs, xy(1, -1), xy(1, -2), xy(1, 1)];
    }
    if (ps % w !== 0) {
      rs = [...rs, xy(-1, -1), xy(-1, -2), xy(-1, 1)];
    }
    xy(0, 0, true);
    return rs;
  },
  'crystal-plus': function (ps, type) {
    var xy = ezPositionWithCheckScope(ps);
    var rs = [];
    var open = type === 'OPEN';
    //var open = false;

    if (open) {
      rs = [
        { ps: xy(-1, -1), brickType: 'd0' }, { ps: xy(1, -1), brickType: 'b0' },
        { ps: xy(-2, 0), brickType: 'd0' }, { ps: xy(-1, 0), brickType: 'd1' }, { ps: xy(0, 0), brickType: '7' }, { ps: xy(1, 0), brickType: 'b1' }, { ps: xy(2, 0), brickType: 'b0' },
        { ps: xy(-2, 1), brickType: 'crystal5' }, { ps: xy(-1, 1), brickType: '2' }, { ps: xy(0, 1), brickType: '5' }, { ps: xy(1, 1), brickType: '3' }, { ps: xy(2, 1), brickType: 'crystal3' },
      ];
    }
    if (!open) {
      rs = [
        { ps: xy(0, -1), brickType: 'crystal1' },
        { ps: xy(-2, 0), brickType: 'd0' }, { ps: xy(-1, 0), brickType: 'd0' }, { ps: xy(0, 0), brickType: '0' }, { ps: xy(1, 0), brickType: 'b0' }, { ps: xy(2, 0), brickType: 'b0' },
        { ps: xy(-2, 1), brickType: 'crystal5' }, { ps: xy(-1, 1), brickType: 'crystal5' }, { ps: xy(0, 1), brickType: 'crystal4' }, { ps: xy(1, 1), brickType: 'crystal3' }, { ps: xy(2, 1), brickType: 'crystal3' },
      ];
    }
    xy(0, 0, true);
    return rs;
  },
  'crystal': function (ps, type) {
    var xy = ezPositionWithCheckScope(ps);
    var rs = [];
    var open = type === 'OPEN';
    //var open = false;

    if (open) {
      rs = [
        { ps: xy(-1, -1), brickType: 'd0' }, { ps: xy(1, -1), brickType: 'b0' },
        { ps: xy(-1, 0), brickType: 'd1' }, { ps: xy(0, 0), brickType: '7' }, { ps: xy(1, 0), brickType: 'b1' },
        { ps: xy(-1, 1), brickType: '2' }, { ps: xy(0, 1), brickType: '5' }, { ps: xy(1, 1), brickType: '3' },
      ];
    }
    if (!open) {
      rs = [
        { ps: xy(0, -1), brickType: 'crystal1' },
        { ps: xy(-1, 0), brickType: 'd0' }, { ps: xy(0, 0), brickType: '0' }, { ps: xy(1, 0), brickType: 'b0' },
        { ps: xy(-1, 1), brickType: 'crystal5' }, { ps: xy(0, 1), brickType: 'crystal4' }, { ps: xy(1, 1), brickType: 'crystal3' },
      ];
    }
    xy(0, 0, true);
    return rs;
  },
  'CIRCLE': circleMap()
};