import React from "react";

export default function List2(props) {
  return (
    <div className="border p-3">
      <h3>Users list</h3>
      <ul className="list-group list-group-flush">
        {props.users.map((user) => {
          return (
            <li className="list-group-item" key={user.id}>
              <span className="w-50 p-3">{user.name}</span>
              <span className="w-50 p-3">{user.surname}</span>
              <button
                className="btn btn-danger float-right mx-2"
                onClick={() => props.deleteUser(user.id)}
              >
                Delete
              </button>
              <button
                className="btn btn-info float-right"
                onClick={() => props.editUser(user)}
              >
                Edit
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
