import React,{Component} from 'react'
import {Button} from 'antd'
import FormModal from '../../FormModal'
import addNewField from '../../../actions/widget.actions'
const ButtonForm = [
    { initialValues: 
        {
            backgroundColor:"#1890ff",
            value : "submit",
            font_color: "#1890ff"
        }
    },
    {
        name:"backgroundColor",
        required: true,
        type:"color"

    },
    {
        name:"value",
        Value:"Submit",
        required: true,
        type:"text"
    },
    {
        name:"font_color",
        font_color:"white",
        required:true,
        type:"color"
    }

]
const ImageForm = [
    { initialValues: 
        {
           alt:"image"
        }
    },
    {
        name:"image",
        required: true,
        type:"file"

    },
    {
        name:"alt",
        required: true,
        type:"text"
    },
    
]


class CardTools extends Component {
    state = {
        FormModal : false
    }
    handleFormModal = (data, fieldName, formValue) => {
        // console.log(data,type)
        this.setState({
            FormModal : data,
            fieldName:fieldName,
            formValue:formValue
        })
    }
    render() {
        return(
            <div>
                {this.state.FormModal && <FormModal 
                        name={this.state.fieldName} 
                        handleFormModal={this.handleFormModal} 
                        widgetID ={this.props.widgetID}  
                        data={this.state.formValue} 
                        name={this.state.fieldName}
                    >
                    </FormModal>}
                <center>
                    <h5>Tools for Card</h5>
                </center>
                <Button onClick={()=>this.handleFormModal(true, "Button", ButtonForm)} type="primary" style={{marginBottom:"3px"}} block> Button </Button>
                <Button onClick={()=>this.handleFormModal(true, "Image", ImageForm)} type="primary" style={{marginBottom:"3px"}} block> Image </Button>
            </div>
        )
    }
}


export default CardTools