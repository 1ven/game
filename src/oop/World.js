import snap from './libs/snap';

const World = (function() {
  function World({
    width,
    height,
    background,
  }) {
    this.width = width;
    this.height = height;
    this.background = background;

    drawBackground = drawBackground.bind(this);

    drawBackground();
  }

  function drawBackground() {
    snap.rect(0, 0, this.width, this.height).attr({
      background: this.background,
    });
  }

  return World;
})();

export default World;
