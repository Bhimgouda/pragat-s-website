import React, { Component } from "react";
import Joi, { errors } from "joi-browser";
import axios from "axios";

class Form extends Component {
  state = {
    data: { name: "", email: "", subject: "", message: "" },
    errors: {},
  };

  schema = {
    name: Joi.string().required().min(4).label("Your Name"),
    email: Joi.string().email().required().label("Email"),
    subject: Joi.string().label("Subject"),
    message: Joi.string().label("Message").min(20),
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = this.state.data;
    this.setState({ data: { name: "", message: "", subject: "", email: "" } });
    axios.defaults.headers.post["Content-Type"] = "application/json";
    const response = await axios.post(
      "https://formsubmit.co/ajax/satvikp508@gmail.com",
      {
        name: name,
        email: email,
        subject: subject,
        message: message,
      }
    );
    console.log(response);
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

  renderInput = (name, label, type = "text") => {
    const { errors, data } = this.state;
    return (
      <div>
        <input
          name={name}
          onChange={this.handleChange}
          type={type}
          value={data[name]}
          placeholder={label}
        />
        {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
      </div>
    );
  };

  renderTextArea = (name, label) => {
    const { errors, data } = this.state;
    return (
      <div>
        <textarea
          placeholder={label}
          value={data[name]}
          onChange={this.handleChange}
          name={name}
          cols="30"
          rows="10"
        />
        {errors[name] && (
          <div className="alert alert-danger">{errors[name]}</div>
        )}
      </div>
    );
  };

  render() {
    return (
      <form>
        {this.renderInput("name", "Your Name", "text")}
        {this.renderInput("email", "Email", "email")}
        {this.renderInput("subject", "Subject", "text")}
        {this.renderTextArea("message", "Your Message")}
        <button onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
