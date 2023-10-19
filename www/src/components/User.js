import React from "react";
import { IoCloseCircleSharp, IoHammerSharp } from 'react-icons/io5'
import AddUser from "./AddUser";

class User extends React.Component {
  constructor(props) { 
    super(props)
    this.state = {
     editform:false 
    }
  }
    user=this.props.user
  render() {
    return (
      <div className="user">
        <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon" />
        <IoHammerSharp onClick={() => {
          this.setState( 
            { editform: !this.state.editform }) 
        }} className="edit-icon" />
        <h3>
          {this.user.firstname} {this.user.lastname}
        </h3>
        <p>{this.user.bio}</p>
        <p>{this.user.fonenumber}</p>
        <b>{this.user.isHappy ? "Щасливий :)" : "Не дуже :("}</b>
        {this.state.editform && <AddUser user={this.user} onAdd={this.props.onEdit} />}
      </div>
    );
  }
}
export default User;
