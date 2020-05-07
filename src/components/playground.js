import React, { Component } from 'react'
import RGL, { WidthProvider } from "react-grid-layout";
import CustomButton from './atoms/button'
import {connect} from 'react-redux'
// import CustomButton from './atoms/button'
const ReactGridLayout = WidthProvider(RGL);
class Playground extends Component {
    state={
        widgets:[]
    }
    componentDidMount() {
        this.props.formFields.Widgets.map(val=>{
            if(val[this.props.widgetID]) {
                this.setState({
                    widgets:val[this.props.widgetID]
                })
            }
        })
    }
    render() {
        console.log(this.state)
        return (
            <div className="container-fluid" style={{ backgroundColor: "#f0f0f0" , overflow:"scroll"}}>
               
                <ReactGridLayout
                    
                    cols={12}
                    rowHeight={30}
                    // isResizable="true"
                >    
                {this.state.widgets.childs && this.state.widgets.childs.map(val=>
                    <div key={val.fieldID} data-grid={val.position} >
                        {val.type=="Button" && <CustomButton data={val.fieldData}></CustomButton> }
                    </div>
                    )}
                

                {/* <div key="c" data-grid={{x: 4, y: 0, w: 1, h: 2}} > 
                    <CustomButton></CustomButton>
                </div> */}
                </ReactGridLayout>

            </div>
        )
    }
}


const mapStateToProps = (state) => ({
    formFields: state.allComponents,
  });
  
  export default connect(mapStateToProps)(Playground);