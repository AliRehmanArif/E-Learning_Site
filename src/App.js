import React from 'react'; 
import Navbar from './components/Navbar';
import Body from './components/Body';
import Cards from './components/Cards';
import About from './components/About';
import Categories from './components/Categories';
import Courses from './components/Courses';
import Instructors from './components/Instructors';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Cards />
      <About />
      <Categories />
      <Courses />
      <Instructors />
    </div>
  );
}

export default App;
