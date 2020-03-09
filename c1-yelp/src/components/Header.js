import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import logo from "./sitelogo.png";

function Header() {

      return (
        <div className="App">
          <div className="bs-component">
                  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <img src={logo} style={imageStyle} alt="logo" />
                    <a className="navbar-brand" href="google.com">  EZ YELP</a>

    
                   
                  </nav>
                </div>
        </div>
      );
}

export default Header;

const imageStyle = {
    height: '25px',
}
