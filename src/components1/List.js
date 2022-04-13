import React from "react";

function List(props) {
  return (
    <div>
      {props.users.map((user) => {
        return (
          <div key={user.id}>
            <p>
              {user.vardas} {user.pavarde}
            </p>
            <button
              onClick={() => {
                props.deletePerson(user.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default List;
