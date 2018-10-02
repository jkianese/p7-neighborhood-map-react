import React, { Component } from 'react';
import './App.css';
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