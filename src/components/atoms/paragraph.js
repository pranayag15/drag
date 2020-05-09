import React from 'react'
import { Button } from 'antd';
function CustomImage(props) {
    const style={
        boxShadow:"0 2px 0 rgba(0, 0, 0, 0.045)",
        border:"solid white 1px",
        borderRadius:"6px",
        height:"100%",
        width:"100%",
        // borderColor:"#1890ff"
    }
    return(
        <p style={style}>
            {props.data.paragraph}
        </p>   
    )
}

export default CustomImage