import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export class NeighborhoodMap extends Component {
  
  componentDidMount() {
      this.loadMap()
  }

  loadMap() {
    if (this.props && this.props.google) {
      // google is available
      const {google} = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;
      const node = ReactDOM.findDOMNode(mapRef);
      
      let zoom = 8;
      let lat = 28.385233;
      let lng = -81.563873;

      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign({}, {
        center: center,
        zoom: zoom
      })
      this.map = new maps.Map(node, mapConfig);
    }
  }  
  
  render() {
    return (
      <div ref='map'>
        Loading map...
      </div>
    )
  }
  
}
export default NeighborhoodMap
