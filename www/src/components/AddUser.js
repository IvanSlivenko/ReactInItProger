import React from "react";

class AddUser extends React.Component {
  userAdd = {}
    constructor(props) { 
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: 1,
            isHappy:false
        }
        
    }

  render() {
    return (
      <form ref={(element)=>this.myForm=element }>
        <input
          placeholder="Ім'я"
          onChange={(event) => this.setState({ firstname: event.target.value })}
        />
        <input
          placeholder="Прізвище"
          onChange={(event) => this.setState({ lastname: event.target.value })}
        />
        <textarea
          placeholder="Біографія"
          onChange={(event) => this.setState({ bio: event.target.value })}
        ></textarea>
        <input
          placeholder="Вік"
          onChange={(event) => this.setState({ age: event.target.value })}
        />
        <label htmlFor="isHappy">Чи щасливий ?</label>
        <input
          type="checkbox"
          id="isHappy"
          onChange={(event) => this.setState({ isHappy: event.target.checked })}
        />
        <button
          type="button"
          
          onClick={() => {
            
            this.myForm.reset();
            this.userAdd = {
              firstname: this.state.firstname,
              lastname: this.state.lastname,
              bio: this.state.bio,
              age: this.state.age,
              isHappy: this.state.isHappy,
            };

            if (this.props.user) 
              this.userAdd.id = this.props.user.id;
            
            this.props.onAdd(this.userAdd)
            this.setState(
              {
                firstname: "",
                lastname: "",
                bio: "",
                age: 1,
                isHappy: false,
              }
            );
          }}
            >
                Додати
            </button>
      </form>
    );
  }
}
export default AddUser;
