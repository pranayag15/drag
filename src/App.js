import React, { Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import store from "./store";
import "antd/dist/antd.css";
import { Button, message } from "antd";
import "./App.css";
import EditFormPanel from "./components/EditComponents/FormEditWindow"
import Renderedfrom from "./components/EditComponents/Renderedfrom"
import Grid from "./grid"
class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <switch>
            <Route path="/">
              <div className="row">
                <div style={{ borderStyle: "none solid", "height": "98vh", "paddingLeft": "25px" }} className="col-sm-3">
                  <EditFormPanel />
                </div>
                <div style={{ padding: "50px" }} className="col-sm-9">
                  <Renderedfrom/>
                  {/* <Grid /> */}
                </div>
              </div>
            </Route>
          </switch>
        </Provider>
      </Router>
    )
  }
}


export default App;
