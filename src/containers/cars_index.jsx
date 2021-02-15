import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions'

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars('damians-cars');
  }

  renderCars(){
    console.log(this.props.cars);
    return this.props.cars.map(car =>{
     return (
              <Link to={`/cars/${car.id}`} key={car.id}>
                <div className="car">
                  <img src='https://picsum.photos/100' alt=""/>
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
        <div className="car-panel col-sm-3" style={{backgroundColor: 'red', height: '100vh'}}>
          {}
        </div>
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
 cars: state.cars
 };
}

export default connect(mapStateToProps,mapDispatchToProps)(CarsIndex)
