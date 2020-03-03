import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import top from './headersnag.png';
import dindin from './table.png'
import drinkfood from './drinkfood.png';
import money from './moneyicon.png'
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


                        <div class="card border-primary col-lg-4" >
                            <div class="card-header">Causal, Date, or Takeout</div>
                                <div class="card-body">
                                <img src={dindin} style={iconStyle} alt="header" />
                        </div>                      
                    </div>

                    <div class="card border-primary col-lg-4" >
                            <div class="card-header">Kind of Food</div>
                                <div class="card-body">
                                <img src={drinkfood} style={iconStyle} alt="header" />
                        </div>                      
                    </div>
                    <div class="card border-primary col-lg-4" >
                            <div class="card-header">Price Range</div>
                                <div class="card-body">
                                <img src={money} style={iconStyle} alt="header" />
                        </div>                      
                    </div>
                </div>
                <div class="card-header text-white bg-primary mb-3" >
  <div class="card-body">
   

  </div> </div>

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
    width: "100%",
    padding: "2rem"
}


const newStyle = {
    maxWidth: "5rem"
}

const messageStyle = {
    padding: "5rem"
}