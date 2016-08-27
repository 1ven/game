import World from '../views/World';

export default function App() {
  World({
    width: window.innerWidth,
    height: window.innerHeight,
    background: '#000',
  });
}
