import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import propTypes from 'prop-types';
import personpng from './person.png';

class RestaurantMap extends React.Component{
    
    render() {
        var restaurantsToDisplay = this.props.restaurants;
        var markerList = restaurantsToDisplay.map((restaurant) => {
            return  <Marker position={{ lat: restaurant.coordinates.latitude, 
                                        lng:  restaurant.coordinates.longitude, }} />
        });
        return (
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: this.props.lat, lng: this.props.lng}}
          >
            <Marker position={{ lat: this.props.lat, lng: this.props.lng}} />
            {markerList}
          </Map>
        );
    }
}


RestaurantMap.propTypes = {
  lat: propTypes.any.isRequired,
  lng: propTypes.any.isRequired,
  //array with restaurant objects that contain latitude and longitude
  restaurants: propTypes.array.isRequired
}


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(RestaurantMap);

const mapStyles = {
    width: '80%',
    height: '50%',
    padding: '2rem',
    margin: '1rem'
  };