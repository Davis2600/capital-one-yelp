import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';

import propTypes from 'prop-types';


const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const YELP_API_KEY = process.env.REACT_APP_YELP_API_KEY;
//remove location map from showing up when we get location data.

class ResatuarantList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: props.preferences[0],
            longitude: props.preferences[1],
            pricePreference : props.preferences[2],
            foodPreference : props.preferences[3],
            mealType : props.preferences[4],  
        }
        this.doYelpCall = this.doYelpCall.bind(this);

    }

    componentDidMount(){
        this.doYelpCall();
    }

    doYelpCall(){
        let doCall = true;
        if(!this.state.latitude || !this.state.longitude ){
            doCall = false;
            alert("Please share location data to get restaurant suggestions!");
            return;
        }else if(!this.state.foodPreference){
            doCall = false;
            alert("Please select a type of food to get restaurant suggestions!");
            return;
        }else if(!this.state.mealType){
            doCall = false;
            alert("Please select a dining option to get restaurant suggestions!");
            return;
        }
        console.log(doCall);
        
        let price = parseInt(this.state.pricePreference) >= 3 ? "3,4" : this.state.pricePreference;
        //the 'value' property of the select menue sets these up nicely
        let category = this.state.foodPreference;
        let latitude = this.state.latitude; 
        let longitude = this.state.longitude;
        let search = this.state.mealType + '+' + category;
        if(category !== "all"){
            var yelpCall = `https://api.yelp.com/v3/businesses/search?term=${search}&latitude=${latitude}&longitude=${longitude}&category=${category}&price=${price}&authorization=${YELP_API_KEY}`;
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
        console.log('LAT:', latitude);
        console.log('LONG:', longitude);
        console.log('search:', search);
        console.log('category:', category)
        console.log('price:', price)
        console.log('API CALL: ', yelpCall);
        fetch(`https://cors-anywhere.herokuapp.com/${yelpCall}`, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        
        

    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default ResatuarantList;