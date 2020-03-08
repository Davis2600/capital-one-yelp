import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Preferences from './components/Preferences';
import RestaurantList from './components/RestaurantList';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      latitude: null,
      longitude: null,
      pricePreference : null,
      foodPreference : null,
      mealType : null,
      preferences : null,
    }
    this.setPreferenceData = this.setPreferenceData.bind(this);
  }


  setPreferenceData(newPreferences){
      
      console.log(newPreferences[0], newPreferences[1]);
      this.setState({
        preferences : newPreferences
      });

  }



  render() {
    return (
      <div className="App">
        <Header/>
        <About />
        <Preferences sendPrefs={this.setPreferenceData.bind(this)}/>
        {
          this.state.preferences == null ?
          null
          :
          <RestaurantList preferences={this.state.preferences}/>
        }
        
  
      </div>
    );
  }

}

export default App;
