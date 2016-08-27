import Snap from 'snapsvg';
import World from '../views/World';

export default function App() {
  const snap = Snap('#app');

  World({
    width: window.innerWidth,
    height: window.innerHeight,
    background: '#000',
  }, snap);
}
