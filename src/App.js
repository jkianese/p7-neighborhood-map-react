import React, { Component } from 'react';
// import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import { GoogleApiWrapper } from 'google-maps-react' 
import './App.css';
import NeighborhoodMap from './components/NeighborhoodMap';

export class App extends Component {
  render () {
    /*
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    */
     
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

/*
const MapContainer = React.createClass({
  render: function() {
    return <div>Google</div>;
  }
})
*/

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBj5AzHYC1kUPRnvaT6G6zsAONHSpKmoqQ',
  Async: true,
  Defer: true 
})(App)