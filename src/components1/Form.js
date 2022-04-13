import React, { Component } from "react";
import List from "./List";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      vardas: "",
      pavarde: "",
    };
  }

  myChangeHandler = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  myHandleForm = (e) => {
    e.preventDefault();
    const data = [
      ...this.state.users,
      {
        id: Date.now(),
        vardas: this.state.vardas,
        pavarde: this.state.pavarde,
      },
    ];

    this.setState({
      users: data,
      vardas: "",
      pavarde: "",
    });
  };

  deletePerson = (personID) => {
    const data = this.state.users.filter((user) => user.id !== personID);
    this.setState({
      users: data,
    });
  };

  updatePerson = (personID, vardas, pavarde) => {};

  render() {
    return (
      <div>
        <form onSubmit={this.myHandleForm}>
          <input
            type="text"
            placeholder="Įveskite ką nori"
            name="vardas"
            value={this.state.vardas}
            onChange={this.myChangeHandler}
          />
          <input
            type="text"
            placeholder="Pavarde"
            name="pavarde"
            value={this.state.pavarde}
            onChange={this.myChangeHandler}
          />
          <button type="submit">Add</button>
        </form>

        <List
          users={this.state.users}
          deletePerson={this.deletePerson}
          updatePerson={this.updatePerson}
        />
        {/* <ul>
          {this.state.users.map(user => {
            return (
              <List
                key={user.id}
                vardas={user.vardas}
                pavarde={user.pavarde}
                deletePerson={this.deletePerson}
              />
            );
          })}
        </ul> */}
      </div>
    );
  }
}

export default Form;
