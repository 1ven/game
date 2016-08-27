import Player from './Player';

function World({
  width,
  height,
  background,
}, snap) {
  snap.rect(0, 0, width, height).attr({
    background,
  });
  Player({
    x: 0,
    y: 0,
    r: 50,
  }, snap);
}

export default World;
