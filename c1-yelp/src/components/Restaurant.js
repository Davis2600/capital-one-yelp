import React from 'react';
import 'bootswatch/dist/minty/bootstrap.min.css';
import propTypes from 'prop-types';

class Restaurant extends React.Component{

    
    render(){
        return(
            <div className="card border-primary mb-3" >
                <div className="card-header"> {this.props.info.price + ' - ' + this.props.info.rating}</div>
                <div className="card-body">
                    <h3 className="card-title">{this.props.info.name + ' @'}</h3>
                    <h5 className="card-title">{this.props.info.location.address1 + " " +this.props.info.location.city}</h5>
                </div>
                <div className="row">
                <div className="col-lg-3">
                    {
                        parseInt(this.props.info.distance) + ' meters away '       
                    }
                    <br/>
                    <a href={this.props.info.url}>{this.props.info.name}'s website</a>
                </div>
                <div className="col-lg-3">
                    <img src={this.props.info.image_url} alt={this.props.info.name + "image"} style = {restaurantPictureStyle}/>
                </div>
                </div>

                <p>

                </p>
            </div>
        )
    }
}
export default Restaurant;
Restaurant.propTypes = {
    info: propTypes.object.isRequired,
}
const restaurantPictureStyle = {
    width : 'auto',
    height : '8rem'
}
