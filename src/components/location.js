import React, { Component } from 'react';
import {Map, Marker, InfoWindow} from 'google-maps-react';


// export default class Location extends Component {
// 	render() {
// 		return (
// 			<div>

// 			</div>
// 		);
// 	}
// }


const TUZLA = {
  lat: 44.538739,
  lng: 18.676133
};

const SARAJEVO = {
  lat: 43.847276,
  lng: 18.387875
};

export default class Location extends React.Component {
  constructor() {
    super();
    this.tuzla = this.tuzla.bind(this);
    this.sarajevo = this.sarajevo.bind(this);
  }
  
  componentDidMount() {
    this.map = new google.maps.Map(this.refs.map, {
      center: SARAJEVO,
      zoom: 17
    });
    var marker = new google.maps.Marker({
      position: SARAJEVO,
      map: this.map
    });
  }
  
  tuzla() {
    this.map.panTo(TUZLA);
    var marker = new google.maps.Marker({
      position: TUZLA,
      map: this.map
    });
  }

  sarajevo() {
    this.map.panTo(SARAJEVO);
  }
  
  render() {
    return (
      <div className='row'>
        <button className='btn btn-primary' onClick={this.tuzla}>Tuzla</button>
        <button className='btn btn-primary' onClick={this.sarajevo}>Sarajevo</button>
        <div ref="map" className='mapa col-md-12' >Map!</div>
      </div>
    );
  }
}