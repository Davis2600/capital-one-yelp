import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import propTypes from 'prop-types';

class RestaurantMap extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        user: props.user
      }

    }
    render() {
        return (
            <Map
            google={this.props.google}
            zoom={8}
            style={mapStyles}
            initialCenter={{ lat: this.state.user[0], lng: this.state.user[1]}}
          >
            <Marker position={{ lat: this.state.user[0], lng: this.state.user[1]}} />
            
          </Map>
        );
    }
}


RestaurantMap.propTypes = {
  //array [0] lattitue [1] longitude
  user: propTypes.array.isRequired,
  //array with restaurant objects that contain latitude and longitude, not built yet
  restaurants: propTypes.func.isRequired
}


export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY
  })(RestaurantMap);

const mapStyles = {
    width: '70%',
    height: '50%',
    padding: '2rem',
    margin: 'auto'
  };