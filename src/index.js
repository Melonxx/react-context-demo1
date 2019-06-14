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
  render() {
    return (
      <themeContext.Provider value={this.state.color}>
        <div className="App">
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
