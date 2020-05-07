import React from 'react'
import { Button } from 'antd';
function CustomButton(props) {
    const style={
        boxShadow:"0 2px 0 rgba(0, 0, 0, 0.045)",
        backgroundColor:"#1890ff",
        border:"solid #1890ff 1px",
        color:"white",
        height:"100%",
        width:"100%",
        // borderColor:"#1890ff"
    }
    return(
        <Button type="primary" style={style} block >
            hello
        </Button>
    )
}

export default CustomButton