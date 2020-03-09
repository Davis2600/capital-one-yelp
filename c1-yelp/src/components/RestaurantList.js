import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import propTypes from 'prop-types';
import Restaurant from './Restaurant';




//remove location map from showing up when we get location data.

class RestaurantList extends React.Component{
    

    render(){
        var restaurantsToDisplay = this.props.restaurantsTD;
        var restaurantList = restaurantsToDisplay.map((restaurantTD) => {
            return <Restaurant info={restaurantTD}/>
        });
        return <ul>{restaurantList}</ul>

        

    }
}

export default RestaurantList;


RestaurantList.propTypes = {
    //array [0] lattitue [1] longitude [2] price preference [3] food preference [4] kind of meal
    restaurantsTD: propTypes.array.isRequired,
}