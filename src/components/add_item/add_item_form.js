import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addNewItem } from '../../actions'


class AddItemForm extends Component {
  renderInput(props){
    return(
      <div className={`col ${props.size || 's12'}`}>
        <div className="input-field">
          <input {...props.input} type="text" autoComplete="off"/>
          <label htmlFor={props.id}>{props.label}</label>
        </div>
        <p className="red-text text-darken-2">{props.meta.touched && props.meta.error}</p>
      </div>
    )
  }

  handleAddItem = async (values) => {
    
    await this.props.addNewItem(values);
    
    this.props.history.push('/');


    // this.props.reset();
  }

  render(){
    const { handleSubmit, reset } = this.props;
    return(
      <form onSubmit={handleSubmit(this.handleAddItem)}>
        <div className="row">
          <Field name="title" component={this.renderInput} id="title" label="Title" size="s12 m8 offset-m2"/>
          <div className="row">
            <Field name="details" component={this.renderInput} id="details" label="Details" size="s12 m8 offset-m2" />
          </div>
          <div className="row">
          <div className="col s6 center">
            <button onClick={reset} type="button" className="btn grey lighten-1">Reset Form</button>
          </div>
            <div className="col s6 center">
              <button className="btn grey darken-2">Add Item</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

function validate(values){
  const {title, details} = values;
  const errors = {};

  if(!title){
    errors.title = 'Please enter a title'
  }

  if(!details){
    errors.details = 'Please enter details'
  }
  return errors;
}

function mapStateToProps(state, props){
  return{
    initialValues: {
      title: "This is your default title",
      details: 'Enter your details here'
    }
  }
}

AddItemForm = connect(mapStateToProps, {
  addNewItem: addNewItem
})(withRouter(AddItemForm));

export default reduxForm({
  form: 'add-item-form',
  validate: validate,

})(AddItemForm)