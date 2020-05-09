import React from 'react'
import { Button } from 'antd';
function CustomButton(props) {
    const style={
        boxShadow:"0 2px 0 rgba(0, 0, 0, 0.045)",
        backgroundColor:props.data.backgroundColor,
        border:"solid"+ props.data.backgroundColor +"1px",
        color:props.data.font_color,
        height:"100%",
        width:"100%",
        fontSize:props.data.font_size+"px"
        // borderColor:"#1890ff"
    }
    return(
        <Button type="primary" style={style} block >
            {props.data.value}
        </Button>
    )
}

export default CustomButton