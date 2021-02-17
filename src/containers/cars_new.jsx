import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { newCar } from '../actions';
import { connect } from 'react-redux';
import Sidebar from './sidebar';

class CarsNew extends Component {
    onSubmit = (values) => {
     this.props.newCar(this.props.garage, values, (car) => {
      console.log(values);
     this.props.history.push('/'); // Navigate after submit
     return car;
     });
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



  render(){
    return(
      <div style={{width:'100vw'}}>
        <Sidebar />
        <div className="car-panel col-sm-9" style={{backgroundColor: 'blue', height: '100vh'}}>
         <form className="new-form" onSubmit={this.props.handleSubmit(this.onSubmit)}>
           <Field
           label="Brand"
           name="brand"
           type="text"
           component={this.renderField}
           />
           <Field
           label="Model"
           name="model"
           type="text"
           component={this.renderField}
           />
           <Field
           label="Plate"
           name="plate"
           type="text"
           component={this.renderField}
           />
           <Field
           label="Owner"
           name="owner"
           type="text"
           component={this.renderField}
           />

           <button className="btn btn-primary" type="submit"
          disabled={this.props.pristine || this.props.submitting}>
           Create Post
           </button>
         </form>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
 return {
 garage: state.garage
 };
}

export default reduxForm({ form: 'newCarForm' })(
 connect(mapStateToProps, { newCar })(CarsNew)
);
