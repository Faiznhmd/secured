import Hero from './components/hero/Hero.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Data from './components/Data/Data.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Data />
    </div>
  );
}

export default App;
