import React from "react";

import Header from './components/Header'
import Users from './components/Users'
import AddUser from "./components/AddUser";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          id: 1,
          firstname: "Bob",
          lastname: "Marley",
          bio: "lorem input dolor sit amet consectetur",
          age: 40,
          isHappy: true,
          fonenumber: "067 470 87 21",
        },
        {
          id: 2,
          firstname: "John",
          lastname: "Doe",
          bio: "lorem input dolor sit amet consectetur",
          age: 22,
          isHappy: false,
          fonenumber: "067 470 87 21",
        },
        {
          id: 3,
          firstname: "Ivan",
          lastname: "Slivenko",
          bio: "lorem input dolor sit amet consectetur",
          age: 41,
          isHappy: true,
          fonenumber: "067 470 87 21",
        },
      ],
    };
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editUser = this.editUser.bind(this);
  }

  render() {
    return (
      <div>
        <Header title="Список користувачів" />
        <main>
          <Users users={this.state.users} onEdit={ this.editUser} onDelete={this.deleteUser} />
        </main>
        <aside>
          <AddUser onAdd={this.addUser} />
        </aside>
      </div>
    );
  }

  deleteUser(id) { 
    this.setState({
users:this.state.users.filter((el)=>el.id !==id)
    })
  }

  editUser(user) { 
    console.log(user);
  }

  addUser(user) { 
    const id = this.state.users.length + 1;
    this.setState({
      users: [...this.state.users, {id,...user}]
    })
    
  }
}

export default App
