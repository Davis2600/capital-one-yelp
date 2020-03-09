import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Preferences from './components/Preferences';
import RestaurantList from './components/RestaurantList';
import RestaurantMap from './components/RestaurantMap';
const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      preferences : null,
      restaurantsToDisplay : null,
      latitude: null,
      longitude: null,
      pricePreference : null,
      foodPreference : null,
      mealType : null, 
    }
    this.setPreferenceData = this.setPreferenceData.bind(this);
    this.doYelpApiCall = this.doYelpApiCall.bind(this);
  }


  setPreferenceData(newPreferences){
      this.doYelpApiCall(newPreferences);
  }

  async doYelpApiCall(prefs){

    var pricePref = prefs[2];
    var foodPref = prefs[4];
        
    let price = parseInt(pricePref) >= 3 ? "3,4" : pricePref;
    //the 'value' property of the select menue sets these up nicely
    let category = prefs[4];
    let latitude = prefs[0];
    let longitude = prefs[1];
    this.setState({
      latitude : latitude,
      longitude : longitude
    });
    let search = foodPref + '+' + category;
    if(category !== "all"){
        var yelpCall = `https://api.yelp.com/v3/businesses/search?term=${search}&latitude=${latitude}&longitude=${longitude}&category=${category}&price=${price}&limit=5&authorization=${YELP_API_KEY}`;
    }else{
        yelpCall = `https://api.yelp.com/v3/businesses/search?term=${search}&latitude=${latitude}&longitude=${longitude}&price=${price}&authorization=${YELP_API_KEY}`;
    }
    
    
    var myHeaders = new Headers();
        myHeaders.append("Authorization", YELP_API_KEY);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    const response = await fetch(`https://cors-anywhere.herokuapp.com/${yelpCall}`, requestOptions);
    const data = await response.json();

    this.setState({ restaurantsToDisplay : data.businesses});
    
       
  }



  render() {
    return (
      <div className="App">
        <Header/>
        <About />
        <Preferences sendPrefs={this.setPreferenceData.bind(this)}/>
        {
          this.state.restaurantsToDisplay  == null ?
          null
          :
          <div className="row">
            <div className="col">
              <RestaurantList restaurantsTD={this.state.restaurantsToDisplay}/>
            </div>
            <div className="col">
              <RestaurantMap restaurants={this.state.restaurantsToDisplay} lat={this.state.latitude} lng={this.state.longitude}/>
            </div>


          </div>
          
        }
        
  
      </div>
    );
  }

}

export default App;
