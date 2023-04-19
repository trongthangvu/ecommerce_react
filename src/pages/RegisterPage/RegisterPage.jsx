import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { endpoints, API } from "./API.js";

class RegisterPage extends React.Component {
  constructor() {
    super();
    this.user = {
      username: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
    };
    this.avatar = React.createRef();
    this.state = {
      user: this.user,
    };
  }
  change = (field, event) => {
    this.user[field] = event.target.value;
    this.setState({
      user: this.user,
    });
  };
  register = (event) => {
    if (this.state.user.password === this.state.user.confirm_password) {
      const formData = new FormData();
      for (let k in this.state.user) {
        if (k !== "confirm_password") formData.append(k.this.state.user[k]);
        formData.append("avatar ", this.avatar.current.files[0]);
        API.post(endpoints["users"], formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      }
      event.preventDefault();
    }
  };
  render() {
    return (
      <div>
        <Form onSubmit={this.register}>
          <RegisterForm
            id="username"
            label="Username"
            type="text"
            field={this.state.user.username}
            change={this.change.bind(this, "username")}
          />
          <RegisterForm
            id="password"
            label="Password"
            type="password"
            field={this.state.user.password}
            change={this.change.bind(this, "password")}
          />
          <RegisterForm
            id="confirmPass"
            label="Confirm Password"
            type="password"
            field={this.state.user.confirm_password}
            change={this.change.bind(this, "confirm_password")}
          />
          <RegisterForm
            id="first_name"
            label="FirstName"
            type="text"
            field={this.state.user.first_name}
            change={this.change.bind(this, "first_name")}
          />
          <RegisterForm
            id="last_name"
            label="LastName"
            type="text"
            field={this.state.user.last_name}
            change={this.change.bind(this, "last_name")}
          />
          ""
          <Form.Group className="mb-3" controlId="avatar">
            <Form.Label>Avatar</Form.Label>
            <Form.Control type="file" ref={this.avatar} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
class RegisterForm extends React.Component {
  render() {
    return (
      <Form.Group className="mb-3" controlId={this.props.id}>
        <Form.Label>{this.props.label}</Form.Label>
        <Form.Control
          type={this.props.type}
          value={this.props.field}
          onChange={this.props.change}
        />
      </Form.Group>
    );
  }
}
export default RegisterPage;
