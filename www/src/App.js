import React from "react";

import Header from './components/Header'

class App extends React.Component {
  helpText = "Help text !";
  render() {
    return (
      <div>
        <Header title="Шапка Сайту" name="Name site" />
        <h1>{this.helpText}</h1>
        <input
          placeholder={this.helpText}
          onClick={this.inputClick}
          onMouseEnter={this.mouseOver}
        />
        <p>{this.helpText === "Help text !" ? "Yes" : "No"}</p>
      </div>
    );
  }

  inputClick() {
    console.log("Cliked");
  }
  mouseOver() {
    console.log("Mouse Over");
  }
}

export default App
