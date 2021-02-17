import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions'
import Sidebar from './sidebar'

class CarsIndex extends Component {


  renderCars(){
    return this.props.cars.map(car =>{
     return (
              <Link to={`/cars/${car.id}`} key={car.id}>
                <div className="car">
                  <img src='https://source.unsplash.com/featured/?tuning' alt=""/>
                  <h2>{car.brand} - {car.model}</h2>
                  <h3>{car.owner}</h3>
                </div>
              </Link>
      );
    });
  }


  render(){
    return(
      <div style={{width: '100vw'}}>
        <Sidebar dest="/cars/new"/>
        <div className="cars-list col-sm-9" style={{backgroundColor: 'blue', height: '100vh'}}>
          {this.renderCars()}
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { fetchCars },
 dispatch
 );
}

function mapStateToProps(state) {
 return {
 cars: state.cars,
 garage: state.garage
 };
}

export default connect(mapStateToProps,mapDispatchToProps)(CarsIndex)
