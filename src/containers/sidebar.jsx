import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setGarage, fetchCars, getGarage } from '../actions';



class Sidebar extends Component {
  constructor(props){
    super(props);
    this.state = {garages: []};
  }

  componentDidMount() {
    fetch(`https://wagon-garage-api.herokuapp.com/`)
      .then(res => res.json())
      .then(json => this.setState({ garages: json.garages }));
  }

  componentDidUpdate() {
     this.props.fetchCars(this.props.garage);
  }

  onSubmit = (values) => {
     this.props.setGarage(values);
    }

  renderField(field) {
   return (
   <div className="form-group">
     <label>{field.label}</label>
     <input
       className="form-control"
       type={field.type}
       {...field.input}
     />
   </div>
   );
   }

  garageSelector(){
      return(
        <div className="car-panel col-sm-3" style={{backgroundColor: 'red', height: '100vh'}}>
         <form className="side-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
           <Field
           label={`Select a garage (${this.state.garages.map(g=>g.name)}) \n or create a new one`}
           name="garage"
           type="text"
           component={this.renderField}
           />
           <button className="btn btn-primary" type="submit"
          disabled={this.props.pristine || this.props.submitting}>
           Go to garage
           </button>
         </form>
        </div>
    )
  }

  garageOn(){
    return(
      <div className="car-panel col-sm-3" style={{backgroundColor: 'red', height: '100vh'}}>
        <div className="card">
          <img src="../../assets/stylesheets/signatureLogo.svg" alt=""/>
          <h3>{this.props.garage}</h3>
          <p>The best garage, with the best inventory page, made by Antal Bako</p>
          <Link to={this.props.dest || '/'}>
            <button className="btn btn-primary">{this.props.dest ? ('Add New Car') : ('Back')}</button>
          </Link>
        </div>
      </div>
    )
  }

  render(){
    return(<div>{(this.props.garage === " ") ? this.garageSelector() : this.garageOn()}</div>)
  }
}

function mapStateToProps(state) {
 return {
 garage: state.garage
 };
}

export default reduxForm({ form: 'garageForm' })(
 connect(mapStateToProps, { setGarage, fetchCars, getGarage })(Sidebar)
);
