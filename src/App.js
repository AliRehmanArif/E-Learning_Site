import React from 'react'; 
import Navbar from './components/Navbar';
import Body from './components/Body';
import Cards from './components/Cards';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Cards />
      <About />
    </div>
  );
}

export default App;
