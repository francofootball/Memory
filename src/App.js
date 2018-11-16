import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <body>
        <form>
          <div className="form-group">
            <label>
              <b>Memory</b>
            </label>
            <textarea
              className="form-control"
              rows="5"
              placeholder="Description of the Memory"
            />
          </div>
        </form>

        <div className="App">
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button type="button" className="btn btn-success">
              Save
            </button>
          </div>
          <button type="button" className="btn btn-danger">
            Cancel
          </button>
        </div>
      </body>
    );
  }
}

export default App;
