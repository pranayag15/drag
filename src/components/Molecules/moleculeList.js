import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import {createNewWidget} from '../../actions/widget.actions'

class MoleculeList extends Component {
    handleMoleculeSelection = async(data) => {
        let widgetId = Date.now()
        await this.props.createNewWidget(data, widgetId)
        this.props.handleMolecule(data, widgetId)
    }
    render() {
        return (
            <div>
                <center> <h5>Widgets </h5></center>
                <button onClick={() => this.handleMoleculeSelection("FORM")} className="btn btn-info btn-block" >
                    Create Form
                </button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    formFields: state.allComponents,
});

const mapDispatchToProps = (dispatch) => ({
    createNewWidget,
});

export default connect(mapStateToProps, {
    createNewWidget
})(MoleculeList);