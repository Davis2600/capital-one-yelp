import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import RestaurantMap from './RestaurantMap';
import propTypes from 'prop-types';


class Preferences extends React.Component 
{

    constructor(props){
        super(props);
        this.state = {
          latitude: null,
          longitude: null, 
          pricePreference : 1,
          foodPreference : null,
          mealType : null,
          locationStatus: 'notfound'
        };
        this.getLocation = this.getLocation.bind(this);
        this.locationIndicator = this.locationIndicator.bind(this);
        this.getCoordinates = this.getCoordinates.bind(this); 
        this.setPreference = this.setPreference.bind(this);
        this.onSendPrefs = this.onSendPrefs.bind(this);

    
  

    }
    getLocation() {
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
        return this.state.latitude && this.state.longitude ? "btn btn-primary" : "btn btn-warning";
    }



    setPreference(field, event){
        let selected = event.target.value;
        this.setState({
            [field] : selected,
        });
        console.log(field, selected);
    }

    onSendPrefs(){
        
        if(!this.state.latitude || !this.state.longitude ){
            alert("Please share location data to get restaurant suggestions!");
            return;
        }else if(!this.state.foodPreference){
            alert("Please select a type of food to get restaurant suggestions!");
            return;
        }else if(!this.state.mealType){
            alert("Please select a dining option to get restaurant suggestions!");
            return;
        }

        var preferenceData = [this.state.latitude, this.state.longitude, this.state.pricePreference, this.state.mealType, this.state.foodPreference];
        this.props.sendPrefs(preferenceData);
    }
 

    render(){
        return(
            <div className="form-group" style={selectStyle}>
                <h2>Find Food!</h2>
                <select className="custom-select" onChange={event => this.setPreference('mealType',event)}>
                    <option defaultValue="">Select a Dining Option</option>
                    <option value="date+night">Date Night</option>
                    <option value="quick+meal">Casual</option>
                    <option value="takeout">Takeout, please!</option>
                </select>
                <p style = {babySpacing}></p>
                <select className="custom-select" onChange={event => this.setPreference('foodPreference', event)} >
                    <option defaultValue="">Select a Type of Food</option>
                    <option value="all">All Categories</option>
                    <option value="newamerican,tradamerican,burgers">American</option>
                    <option value="sushi">Sushi</option>
                    <option value="chinese">Chinese</option>
                    <option value="indpak">Indian</option>
                    <option value="korean">Korean</option>
                    <option value="pizza">Pizza</option>
                    <option value="coffee">Coffee</option>
                    <option value="sandwiches">Sandwiches</option>
                    <option value="seafood">Seafood</option>
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
                        <button type="button" className={this.locationIndicator()} onClick={this.getLocation}>
                           Share Current Location
                        
                        </button>

                    </div>
                </div>

            
            
            <p></p>
            <button type="submit" className="btn btn-primary btn-lg" onClick={this.onSendPrefs.bind(this)}>Get Results!</button>
            <p style = {babySpacing}></p>

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

  Preferences.propTypes = {
    //array [0] lattitue [1] longitude
    sendPrefs: propTypes.func.isRequired,
  }