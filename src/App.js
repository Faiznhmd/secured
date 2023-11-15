import Hero from './components/hero/Hero.jsx';
import Navbar from './components/navbar/Navbar.jsx';
import Data from './components/Data/Data.jsx';
import Cloud from './components/Cloud/Cloud.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Data />
      <Cloud />
    </div>
  );
}

export default App;
