import React from "react";

class Users extends React.Component {
  users = [
    {
      id: 1,
      firstname: "Bob",
      Lastbame: "Marley",
      bio: "lorem input dolor sit amet consectetur",
      age: 40,
      isHappy: true
    },
    {
      id: 2,
      firstname: "John",
      Lastbame: "Doe",
      bio: "lorem input dolor sit amet consectetur",
      age: 22,
      isHappy: false
    },
    {
      id: 3,
      firstname: "Ivan",
      Lastbame: "Slivenko",
      bio: "lorem input dolor sit amet consectetur",
      age: 41,
      isHappy: true
    }
  ];
  render() {
      return (
          <div>
              {
                this.users.map((el) => (
                <div className="user" key={el.id}>
                    <h3>{el.firstname} {el.Lastbame} </h3>
                    <p>{el.bio}</p>
                </div>))
              }
        </div>
          )
  }
}
export default Users
