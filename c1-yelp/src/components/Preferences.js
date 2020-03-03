import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';


var GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
console.log(GOOGLE_API_KEY);
class Preferences extends React.Component 
{
    constructor(props){
        super(props);
        this.state = {
          latitude: null,
          longitude: null, 
          userAddress : null
        };
        this.getLocation = this.getLocation.bind(this);
        this.locationIndicator = this.locationIndicator.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this); 
        this.getUserAddress = this.getUserAddress.bind(this);
    }
    getLocation() {
        console.log(this.state.userAddress);
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(this.getCoordinates, this.handleLocationError);
        } else {
          alert("Geolocation is not supported by this browser.");
        }
    }
    
    getCoordinates(position) {
    this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    });
    this.getUserAddress();

    }

    handleLocationError(error){
        switch(error.code) {
            case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
            case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
            case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
            case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
        default:
            alert("Error");
        }
    }

    locationIndicator(){
        console.log(this.state.userAddress != null ? "btn btn-primary" : "btn btn-warning");
        return this.state.userAddress != null ? "btn btn-primary" : "btn btn-warning";
    }

    getUserAddress() {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&&key=${GOOGLE_API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({
            userAddress: data.results[0].formatted_address
        }))
        .catch(error => alert(error))
    }

    render(){
        return(
            <div className="form-group" style={selectStyle}>
                <h2>Find Food!</h2>
                <select className="custom-select">
                    <option defalutvalue="">Select a Dining Option</option>
                    <option value="1">Date Night</option>
                    <option value="2">Casual Meal</option>
                    <option value="3">Takeout, please!</option>
                </select>
                <p style = {babySpacing}></p>
                <select className="custom-select" >
                    <option defaultvalue="">Select a Type of Food</option>
                    <option value="1">Date Night</option>
                    <option value="2">Casual Meal</option>
                    <option value="3">Takeout, please!</option>
                </select>
                <p style = {babySpacing}></p>
                <div className = "row">
                    <div className="col">
                        <h6>Price:  </h6> 
                        <div className="btn-group" role="group">
                                <button type="button" className="btn btn-secondary">$</button>
                                <button type="button" className="btn btn-secondary">$$</button>
                                <button type="button" className="btn btn-secondary">$$$+</button>

                        </div>
                    </div>
                    <div className="col">
                    <h6>Location:  </h6> 
                        <button type="button" className={this.locationIndicator()} onClick={this.getLocation}>Get Location</button>
                        {
                            this.state.userAddress != null ?
                            <h3>Got Address!</h3>
                            :
                            null
                        }
                    </div>
                </div>

            
            
            <p></p>
            <button type="button" className="btn btn-primary btn-lg">Get Results!</button>
            <p style = {babySpacing}></p>
            {
                this.state.latitude && this.state.longitude ?
                <img src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.state.latitutde},${this.state.longitude}&zoom=14&size=800x600&sensor=false&markers=color:red%7C${this.state.latitude},${this.state.longitude}&key=${GOOGLE_API_KEY}`} alt = '' /> 
                :
                null
            }
            
        </div>
        
        )
    }   
}

export default Preferences;

const selectStyle = {
    padding : "5rem",

};

const babySpacing = {
    padding : "1rem",

};
