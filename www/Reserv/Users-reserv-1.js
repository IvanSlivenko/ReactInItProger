import React from "react";

class Users extends React.Component {
  users = [
    {
      id: 1,
      firstname: "Bob",
      Lastbame: "Marley",
      bio: "lorem input dolor sit amet consectetur",
      age: 40,
      isHappy: true,
      fonenomber: "067 470 87 21"
    },
    {
      id: 2,
      firstname: "John",
      Lastbame: "Doe",
      bio: "lorem input dolor sit amet consectetur",
      age: 22,
      isHappy: false,
      fonenomber: "067 470 87 21"
    },
    {
      id: 3,
      firstname: "Ivan",
      Lastbame: "Slivenko",
      bio: "lorem input dolor sit amet consectetur",
      age: 41,
      isHappy: true,
      fonenomber: "067 470 87 21"
    },
  ];
  render() {
    if (this.users.length>0) { return (
      <div>
        {this.users.map((el) => (
          <div className="user" key={el.id}>
            <h3>
              {el.firstname} {el.Lastbame}
            </h3>
            <p>{el.bio}</p>
            <p>{el.fonenomber}</p>
            <b>{el.isHappy ? 'Щасливий :)': 'Не дуже :(' }</b>
          </div>
        ))}
      </div>
    );
    }
    else
       return (
         <div className="user">
           <h3>Користувачів немає</h3>
       
      </div>
    );
   
  }
}
export default Users
