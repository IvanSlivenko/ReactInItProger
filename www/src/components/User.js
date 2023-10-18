import React from "react";
import {IoCloseCircleSharp, IoHammerSharp} from  'react-icons/io5'

class User extends React.Component {
    user=this.props.user
  render() {
    return (
        <div className="user">
            <IoCloseCircleSharp className="delete-icon" />
            <IoHammerSharp className="edit-icon"/>
        <h3>
          {this.user.firstname} {this.user.Lastbame}
        </h3>
        <p>{this.user.bio}</p>
        <p>{this.user.fonenomber}</p>
        <b>{this.user.isHappy ? "Щасливий :)" : "Не дуже :("}</b>
      </div>
    );
  }
}
export default User;
