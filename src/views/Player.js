function Player({
  x,
  y,
  r,
}, snap) {
  const player = snap.circle(x + r, y + r, r).attr({
    fill: '#fff',
  });
}

export default Player;
