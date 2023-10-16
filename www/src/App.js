import React from "react";

import Header from './components/Header'
import Image from "./components/Image";
import logo from "./img/logo.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpText: "Help text",
      userData: "",
    };

    this.inputClick = this.inputClick.bind(this);
  }

  componentDidUpdate(prevProp) {
    if (this.state.helpText !== "Help")
      console.log("Some");
  }

  render() {
    return (
      <div>
        <Header title="Шапка Сайту" name="Name site" />
        <h1>{this.state.helpText}</h1>
        <h2>{this.state.userData}</h2>
        <input
          placeholder={this.state.helpText}
          onChange={(event) => this.setState({ userData: event.target.value })}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
        />
        <p>{this.state.helpText === "Help text !" ? "Yes" : "No"}</p>
        <Image image={logo} />
        <img src={logo} />
      </div>
    );
  }

  inputClick() {
    this.setState({ helpText: "Cnanged" });
    console.log("Cliked");
  }
  mouseOver() {
    console.log("Mouse Over");
  }
}

export default App
