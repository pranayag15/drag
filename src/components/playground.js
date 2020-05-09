import React, { Component } from 'react'
import RGL, { WidthProvider } from "react-grid-layout";
import CustomButton from './atoms/button'
import CustomImage from './atoms/image'
import { connect } from 'react-redux'
import { updatePosition } from '../actions/widget.actions'
// import CustomButton from './atoms/button'
const ReactGridLayout = WidthProvider(RGL);
class Playground extends Component {
    state = {
        widgetsID: [],
        widgets: {}
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.formFields != this.props.formFields) {
            this.setState({
                widgetsID: Object.keys(this.props.formFields.Widgets[this.props.widgetID].childs),
                widgets: this.props.formFields.Widgets[this.props.widgetID].childs
            })
        }
    }

    handleChange = (data) => {
        console.log(data)
        this.props.updatePosition(this.props.widgetID, data)
    }
    render() {
        // console.log(this.state)
        return (
            <div className="container-fluid"  style={{ backgroundColor: "#f0f0f0", overflow: "scroll", width:"30vw" }}>

                {this.state.widgetsID.length > 0 && <ReactGridLayout
                    cols={3}
                    rowHeight={30}
                    onDragStop={this.handleChange}
                    onResizeStop={this.handleChange}
                >
                    {this.state.widgetsID.map(val =>
                        <div key={val} data-grid={this.state.widgets[val].position} >
                            {this.state.widgets[val].type == "Button" && <CustomButton data={this.state.widgets[val].fieldData}></CustomButton>}
                            {this.state.widgets[val].type == "Image" && <CustomImage data={this.state.widgets[val].fieldData}></CustomImage>}
                        </div>
                    )}
                </ReactGridLayout>}

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    formFields: state.allComponents,
});

const mapDispatchToProps = (dispatch) => ({
    updatePosition,
});

export default connect(mapStateToProps, { updatePosition })(Playground);