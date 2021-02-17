import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCar } from '../actions';
import Sidebar from './sidebar';

class CarsShow extends Component {

  deleteCar(id){
    fetch(`https://wagon-garage-api.herokuapp.com/cars/${id}`,{
      method: 'DELETE'
    }).then(() => {
     this.props.history.push('/'); // Navigate after submit
     })
  }

  renderCar(){
    console.log(this);
    return (
      <div>
        <div className="car-detail">
          <ul>
            {Object.entries(this.props.car).map(attr => <p key={Math.random()}>{attr[0]} : {attr[1]} </p>)}
          </ul>
        <p className='btn' onClick={() => this.deleteCar(this.props.car.id)}>IT'S FIXED</p>
        </div>
      </div>

      );
  }


  render(){
    return(
      <div style={{width: '100vw'}}>
        <Sidebar />
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
 return { car, idFromUrl };
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
