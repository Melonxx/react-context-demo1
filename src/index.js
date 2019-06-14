import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const themeContext = React.createContext();

function Button(props) {
  return (
    <div style={{ color: props.theme }}>
      <h1>这是一个组件1</h1>
    </div>
  );
}

function Input(props) {
  return (
    <div style={{ color: props.theme }}>
      <h1>这是另一个组件2</h1>
    </div>
  );
}

function Box(props) {
  return <div>{props.children}</div>;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      color: "red"
    };
  }
  changeColor() {
    if (this.state.color === "red") {
      this.setState({
        color: "green"
      });
    } else {
      this.setState({
        color: "red"
      });
    }
  }
  render() {
    return (
      <themeContext.Provider theme={this.state.color}>
        <div className="App">
          <input
            value="button"
            onClick={this.changeColor.bind(this)}
            type="button"
          />
          <themeContext.Consumer>
            {n => (
              <div>
                <Box>
                  <Button theme={n} />
                </Box>
                <Box>
                  <Input theme={n} />
                </Box>
              </div>
            )}
          </themeContext.Consumer>
        </div>
      </themeContext.Provider>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
