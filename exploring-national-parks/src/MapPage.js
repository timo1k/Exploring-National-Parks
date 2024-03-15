
import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

/**
 * Renders the ParkInfo component page.
 * @component
 * @module NewsPage
 *
 * @returns {JSX.Element} The rendered ParkInfo component.
 */


 
 class MapPage extends Component {
   render() {
     const mapStyles = {
       width: '100%',
       height: '100%'
     };
 
     return (
        <Map
            google={this.props.google}
            zoom={12}
            style={mapStyles}
            initialCenter={{
            lat: 39.9812,
            lng: -75.1554
            }}
        >

            <Marker position={{ lat: 39.9812, lng: -75.1554 }} />
        </Map>
     );
   }
 }
 
 export default GoogleApiWrapper({
   apiKey: 'AIzaSyCWGP2yhBJIGzkCJzLUIUfRTrYvTKoxKlk'
 })(MapPage);
 

  