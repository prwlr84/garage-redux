import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCars } from '../actions'

class CarsShow extends Component {
  renderCar(id){
    // const currCar = this.props.cars.filter(car=>car.id === id);
    // return (
    //   <div className="car">
    //     <ul>
    //       {Object.entries(currCar).map(attr => <p>{attr[0]} : {attr[1]} </p>)}
    //     </ul>
    //   </div>

    //   );
  }


  render(){
    return(
      <div style={{width: '100vw'}}>
        <div className="car-panel col-sm-3" style={{backgroundColor: 'red', height: '100vh'}}>
          {}
        </div>
        <div className="cars-list col-sm-9" style={{backgroundColor: 'blue', height: '100vh'}}>
          {this.renderCar()}
        </div>
      </div>
    )
  }
}

export default CarsShow;
