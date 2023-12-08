import './App.css';
import Navbar from './components/navbar/navbar'; 
import Hero from './components/hero/hero';
import Playback from './components/playback/playback';
import Sub from './components/sub-hero/sub';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Playback />
      <Sub />
    </div>
  );
}

export default App;
