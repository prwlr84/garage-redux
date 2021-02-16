import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCar } from '../actions'

class CarsShow extends Component {
  renderCar(){
    return (
      <div className="car">
        <ul>
          {Object.entries(this.props.car).map(attr => <p>{attr[0]} : {attr[1]} </p>)}
        </ul>
      </div>

      );
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

function mapDispatchToProps(dispatch) {
 return bindActionCreators(
 { fetchCar },
 dispatch
 );
}

function mapStateToProps(state, ownProps) {
 const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
 const car = state.cars.find(p => p.id === idFromUrl);
 return { car };
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
