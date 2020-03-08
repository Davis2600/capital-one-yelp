import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import RestaurantMap from './RestaurantMap';


const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
//remove location map from showing up when we get location data.

class Preferences extends React.Component 
{

    constructor(props){
        super(props);
        this.state = {
          latitude: null,
          longitude: null, 
          userAddress : null,
          pricePreference : null,
          foodPreference : null,
          mealType : null
        };
        this.getLocation = this.getLocation.bind(this);
        this.locationIndicator = this.locationIndicator.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this); 
        this.getUserAddress = this.getUserAddress.bind(this);
        this.setPreference = this.setPreference.bind(this);
        this.doYelpCall = this.doYelpCall.bind(this);

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
        console.log(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&&key=${GOOGLE_API_KEY}`);
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.latitude},${this.state.longitude}&sensor=false&&key=${GOOGLE_API_KEY}`)
        .then(response => response.json())
        .then(data => this.setState({
            userAddress: data.results[0].formatted_address
        }))
        .catch(error => alert(error));
    }

    setPreference(field, event){
        let selected = event.target.value;
        this.setState({
            [field] : selected,
        });
        console.log(field, selected);
    }

    doYelpCall(){
        let doCall = true;
        if(!this.state.latitude || !this.state.longitude ){
            doCall = false;
            alert("Please share location data to get restaurant suggestions!");
        }else if(!this.state.foodPreference){
            doCall = false;
            alert("Please select a type of food to get restaurant suggestions!");
        }else if(!this.state.mealType){
            doCall = false;
            alert("Please select a dining option to get restaurant suggestions!");
        }
        console.log(doCall);
        
    }

    render(){
        return(
            <div className="form-group" style={selectStyle}>
                <h2>Find Food!</h2>
                <select className="custom-select" onChange={event => this.setPreference('mealType',event)}>
                    <option defaultValue="">Select a Dining Option</option>
                    <option value="Date">Date Night</option>
                    <option value="Casual">Casual Meal</option>
                    <option value="Takeout">Takeout, please!</option>
                </select>
                <p style = {babySpacing}></p>
                <select className="custom-select" onChange={event => this.setPreference('foodPreference', event)} >
                    <option defaultValue="">Select a Type of Food</option>
                    <option value="American">American</option>
                    <option value="Sushi">Sushi</option>
                    <option value="Chinese">Chinese</option>
                    <option value="Indian">Indian</option>
                    <option value="Korean">Korean</option>
                    <option value="Pizza">Pizza</option>
                    <option value="Coffee">Coffee</option>
                    <option value="Sandwiches">Sandwiches</option>
                </select>
                <p style = {babySpacing}></p>
                <div className = "row">
                    <div className="col">
                    <div className="form-group" onChange={event => this.setPreference('pricePreference', event)} >
                            <div className="custom-control-group">
                            <label className="custom-radio" >
                            <input type="radio" value="1" id="customRadio1" name="customRadio"  defaultChecked/>
                               $</label>
                            </div>
                            <div className="custom-control-group">
                            <label className="custom-radio" >
                            <input type="radio" value="2" id="customRadio2" name="customRadio"  />
                             $$</label>
                             </div>
                            <div className="custom-control-group">
                            <label className="custom-radio" >
                            <input type="radio" value="3" id="customRadio3" name="customRadio"  />
                             $$$+</label>
                            </div>

                    </div>
                    </div>
                    <div className="col">
               
                    <h6>Location:  </h6> 
                        <button type="button" className={this.locationIndicator()} onClick={this.getLocation}>Share Location Data</button>
                        {
                            this.state.userAddress != null ?
                            <h4>Got Address!</h4>
                            :
                            null
                        }
                    </div>
                </div>

            
            
            <p></p>
            <button type="submit" className="btn btn-primary btn-lg" onClick={this.doYelpCall}>Get Results!</button>
            <p style = {babySpacing}></p>
            {
                this.state.latitude && this.state.longitude ?
                
                    <RestaurantMap user={[this.state.latitude, this.state.longitude]}/>
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

const mapStyles = {
    width: '100%',
    height: '100%',
  };