import React, { Component } from "react";
import Joi, { errors } from "joi-browser";
import axios from "axios";

class Form extends Component {
  state = {
    data: { name: "", email: "", message: "" },
    errors: {},
    submitted: false,
  };

  schema = {
    name: Joi.string().required().min(4).label("Your Name"),
    email: Joi.string().email().required().label("Email"),
    message: Joi.string().label("Message"),
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors: errors || {} });
    if (errors) return;
    this.setState({ submitted: true });
    const { name, email, subject, message } = this.state.data;
    this.setState({
      data: { name: "", message: "", email: "" },
    });
    axios.defaults.headers.post["Content-Type"] = "application/json";
    const response = await axios.post(
      "https://formsubmit.co/ajax/e4a94ab3178af24c92f756f892be3382",
      {
        name: name,
        email: email,
        subject: subject,
        message: message,
      }
    );

    console.log(response);
  };

  validateForm = (input) => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema);
    const errors = {};
    if (error) {
      error.details.forEach((error) => {
        errors[error.path[0]] = error.message;
      });
      return errors;
    }
    return null;
  };

  validateProperty = (input) => {
    const errors = {};
    const fieldObj = { [input.name]: input.value };
    const schema = { [input.name]: this.schema[input.name] };
    const { error } = Joi.validate(fieldObj, schema);

    if (error) {
      errors[error.details[0].path[0]] = error.details[0].message;
      return errors;
    }
    return null;
  };

  handleChange = (e) => {
    const { currentTarget: input } = e;
    const data = { ...this.state.data };
    data[input.name] = input.value;

    const errors = this.validateProperty(input);
    this.setState({ data, errors: errors || {} });
  };

  renderInput = (name, label, type = "text", autocomplete = "on") => {
    const { errors, data } = this.state;
    return (
      <div>
        <input
          className="input"
          name={name}
          onChange={this.handleChange}
          type={type}
          value={data[name]}
          placeholder={label}
          autoComplete={autocomplete}
        />
        {(errors[name] && <div className="alert">{errors[name]}</div>) || (
          <div className="alert">{errors[name]}</div>
        )}
      </div>
    );
  };

  renderTextArea = (name, label) => {
    const { errors, data } = this.state;
    return (
      <div>
        <textarea
          className="input textarea"
          placeholder={label}
          value={data[name]}
          onChange={this.handleChange}
          name={name}
          cols="30"
          rows="10"
        />
        {(errors[name] && <div className="alert">{errors[name]}</div>) || (
          <div className="alert">{errors[name]}</div>
        )}
      </div>
    );
  };

  render() {
    return (
      <form>
        {this.renderInput("name", "Your Name", "text")}
        {this.renderInput("email", "Email", "email")}
        {this.renderTextArea("message", "Your Message")}
        <button className="btn btn--reflection" onClick={this.handleSubmit}>
          {this.state.submitted === false ? "submit" : "Submitted"}
        </button>
      </form>
    );
  }
}

export default Form;
