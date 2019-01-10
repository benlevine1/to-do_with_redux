import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'


class AddItemForm extends Component {
  renderInput(props){
    // console.log("render input args", props)
    return(
      <div className={`col ${props.size || 's12'}`}>
        <div className="input-field">
          <input {...props.input} type="text" autoComplete="off"/>
          <label>{props.label}</label>
        </div>
        <p className="red-text text-darken-2">{props.meta.touched && props.meta.error}</p>
      </div>
    )
  }

  handleAddItem = (values) => {
    // console.log('Add Item Form Values', values);

    this.props.reset();
  }

  render(){
    console.log("add Item form props", this.props)
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

export default reduxForm({
  form: 'add-item-form',
  validate: validate,
  initialValues: {
    details: "This is your default title",
    details: 'Enter your details here'
  }
})(AddItemForm)