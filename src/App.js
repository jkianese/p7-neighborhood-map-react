import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import axios from 'axios';
// import map from './Map'
import NeighborhoodMap from './components/NeighborhoodMap'


class App extends Component {
  render () {
    return (
      <main>
        <div id="map">
          <NeighborhoodMap />
        </div>
      </main>  
    )
  }
}

export default App