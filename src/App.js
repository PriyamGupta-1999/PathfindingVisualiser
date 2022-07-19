import React from 'react';
import './App.css';
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';
import Header from './header';
import Footer from './footer';





function App() {
  return (

    <div className="App">

      <Header />
      <PathfindingVisualizer></PathfindingVisualizer>
      <Footer />
    </div>
  );
}

export default App;
