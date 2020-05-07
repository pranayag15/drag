import React, { Component } from 'react';
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
import MoleculeList from './components/Molecules/moleculeList'
import Playground from './components/playground'
import CardTools from './components/Molecules/card/cardTools'
class App extends Component {
  state = {
    molecule: false
  }
  handleMolecule = (data, widgetID) => {
    this.setState({
      molecule: data,
      widgetID:widgetID
    })
  }
  render() {
    console.log(this.state)
    return (
      <Router>
        <Provider store={store}>
          <switch>
            <Route path="/">
              <div className="row">
                <div style={{ borderStyle: "none solid", "height": "98vh", "paddingLeft": "25px", padding: "2px", paddingTop: "10px" }} className="col-sm-2">
                  {this.state.molecule == "FORM" && <EditFormPanel widgetID={this.state.widgetID} />}
                  {this.state.molecule == "CARD" && <CardTools widgetID={this.state.widgetID} />}
                  {!this.state.molecule && <MoleculeList handleMolecule={this.handleMolecule} />}
                </div>
                <div style={{ padding: "10px" }} className="col-sm-10">
                  {this.state.molecule && <div className="container-fluid">
                    <center> <h4>Customize your {this.state.molecule.toLowerCase()}</h4> </center>
                    <center>
                      <button className="btn btn-success">
                        Add To main website
                    </button>
                    &nbsp;&nbsp;
                      <button onClick={()=>this.setState({molecule:false, widgetID:null})} className="btn btn-danger">
                        Cancel all changes
                    </button>
                    </center>
                    <br/>
                    <Playground widgetID={this.state.widgetID} />
                  </div>}
                </div>
              </div>
            </Route>
          </switch>
        </Provider>
      </Router>
    )
  }
}

export default App
