import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import top from './headersnag.png';
import dindin from './table.png'
class About extends React.Component
{
   render(){
       return(
           <div>
                <img src={top} style={headerImageStyle} alt="header" />
               <h2>
                   Find restaurants using the same powerful tools of yelp, but <i>easier</i>.
               </h2>
               <h6>
                    Get started by making specifying giving us some information about your ideal dining expirience in <b>3 simple steps</b>.
                </h6>
                <div class = "row">
                    <div class = "col-lg-4">
                        <div class="bs-component">
                            <img src={dindin} style={iconStyle} alt="header" />
                            <h6>Causal, Date, or Takeout</h6>
                        </div>                        
                    </div>

                    <div class = "col-lg-4">
                        <div class="bs-component">
                            <h6>Kind of Food</h6>
                        </div>
                    </div>
                    <div class = "col-lg-4">
                    <div class="bs-component">
                            <h6>Price Range</h6>
                        </div>
                    </div>
                </div>
                <h6>
                    No scrolling through long lists of results necessary!
                </h6>
           </div>
       )
   } 
}
export default About;

const iconStyle = {
    height: "100px"
}
const headerImageStyle = {
    height: "auto",
    width: "100%"
}