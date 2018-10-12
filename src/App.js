import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react' 
import './App.css';
import NeighborhoodMap from './components/NeighborhoodMap';

export class App extends Component {
  render () {
     
    return (
      <main>
        <div id="map">
          <NeighborhoodMap google={this.props.google} /> 
          {/* <NeighborhoodMap /> */}
      </div>
      </main>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: '',
  Async: true,
  Defer: true 
})(App)
