import snap from '../libs/snap';

function render(width, height, background) {
  snap.rect(0, 0, width, height).attr({
    background,
  });
}

export default function World({
  width,
  height,
  background,
}) {
  render(width, height, background);
}
