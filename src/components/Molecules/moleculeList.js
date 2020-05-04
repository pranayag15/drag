import React, { Component } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { createNewWidget } from "../../actions/widget.actions";

class MoleculeList extends Component {
  handleMoleculeSelection = async (data) => {
    let widgetId = Date.now();
    await this.props.createNewWidget(data, widgetId);
  };
  render() {
    return (
      <div>
        <center>
          {" "}
          <h5>Widgets </h5>
        </center>
        <Link to="/createform">
          <button
            onClick={() => this.handleMoleculeSelection("FORM")}
            className="btn btn-info btn-block"
          >
            Create Form
          </button>
        </Link>
        <Link to="/createcard">
          <button
            onClick={() => this.handleMoleculeSelection("CARD")}
            className="btn btn-info btn-block"
          >
            Create Card
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  formFields: state.allComponents,
});

const mapDispatchToProps = (dispatch) => ({
  createNewWidget,
});

export default connect(mapStateToProps, {
  createNewWidget,
})(MoleculeList);
