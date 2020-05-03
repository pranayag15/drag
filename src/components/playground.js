import React, { Component } from 'react'
import RGL, { WidthProvider } from "react-grid-layout";

const ReactGridLayout = WidthProvider(RGL);
class Playground extends Component {
    render() {
        return (
            <div className="container-fluid" style={{ backgroundColor: "#f0f0f0" , overflow:"scroll"}}>
               
                <ReactGridLayout
                    
                    cols={12}
                    rowHeight={30}
                    // isResizable="true"
 
                >                

                </ReactGridLayout>

            </div>
        )
    }
}

export default Playground