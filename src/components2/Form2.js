import React, { Component } from "react";
import List2 from "./List2";

export default class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [
        {
          name: "Jonas",
          surname: "Jonaitis",
          id: Date.now(),
        },
        {
          name: "Petras",
          surname: "Petraitis",
          id: Date.now() + 1,
        },
      ],
      name: "",
      surname: "",
      btn: "Submit",
      updateId: "",
    };
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitForm = (e) => {
    e.preventDefault();

    if (this.state.btn === "Submit") {
      const data = [
        ...this.state.users,
        {
          id: Date.now(),
          name: this.state.name,
          surname: this.state.surname,
        },
      ];
      console.log(data);
      this.setState({
        users: data,
        name: "",
        surname: "",
      });
    } else {
      const data = [...this.state.users];
      const index = this.state.users.findIndex(
        (user) => user.id === this.state.updateId
      );
      data[index] = {
        ...data[index],
        name: this.state.name,
        surname: this.state.surname,
      };
      this.setState({
        users: data,
        btn: "Submit",
        name: "",
        surname: "",
      });
    }
  };

  deleteUser = (id) => {
    const data = this.state.users.filter((user) => user.id !== id);
    this.setState({
      users: data,
    });
  };

  editUser = (user) => {
    this.setState({
      name: user.name,
      surname: user.surname,
      btn: "Update",
      updateId: user.id,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form className="border p-3" onSubmit={this.submitForm}>
              <h3 className="mb-3">Registration info</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  value={this.state.name}
                  name="name"
                  onChange={this.inputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="surname">Surname</label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  placeholder="Enter surname"
                  value={this.state.surname}
                  name="surname"
                  onChange={this.inputChange}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                {this.state.btn}
              </button>
            </form>
          </div>
          <div className="col-6">
            {this.state.users.length > 0 && (
              <List2
                users={this.state.users}
                deleteUser={this.deleteUser}
                editUser={this.editUser}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
