import React from "react";

import User from './User';


class Users extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
      users : [
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
  ]
    }
    
  }

  render() {
    if (this.state.users.length>0) { return (
      <div>
        {this.state.users.map((el) => (
          <User key={el.id} user={el}/>
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