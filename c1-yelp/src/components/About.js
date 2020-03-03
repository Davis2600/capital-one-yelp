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
                <div className = "row">


                        <div className="card border-primary col-lg-4" >
                            <div className="card-header">Causal, Date, or Takeout</div>
                                <div className="card-body">
                                <img src={dindin} style={iconStyle} alt="header" />
                        </div>                      
                    </div>

                    <div className="card border-primary col-lg-4" >
                            <div className="card-header">Kind of Food</div>
                                <div className="card-body">
                                <img src={drinkfood} style={iconStyle} alt="header" />
                        </div>                      
                    </div>
                    <div className="card border-primary col-lg-4" >
                            <div className="card-header">Price Range</div>
                                <div className="card-body">
                                <img src={money} style={iconStyle} alt="header" />
                        </div>                      
                    </div>
                </div>
                <div className="card-header text-white bg-primary mb-3" >
  <div className="card-body">
   

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