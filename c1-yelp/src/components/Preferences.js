import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';


class Preferences extends React.Component 
{

    render(){
        return(
            <div class="form-group">
                <h2>Find Food!</h2>
                <select class="custom-select">
                    <option selected="">Select a Dining Option</option>
                    <option value="1">Date Night</option>
                    <option value="2">Casual Meal</option>
                    <option value="3">Takeout, please!</option>
                </select>

                <select class="custom-select">
                    <option selected="">Select a Type of Food</option>
                    <option value="1">Date Night</option>
                    <option value="2">Casual Meal</option>
                    <option value="3">Takeout, please!</option>
                </select>

                <input class="form-control form-control-lg" type="text" placeholder="Price" id="inputLarge"/>
            </div>
        )
    }   
}

export default Preferences;
