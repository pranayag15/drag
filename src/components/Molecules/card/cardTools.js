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


class CardTools extends Component {
    state = {
        FormModal : false
    }
    handleFormModal = (data, type) => {
        console.log(data,type)
        this.setState({
            FormModal : data,
            type:type
        })
    }
    render() {
        return(
            <div>
                {this.state.FormModal && <FormModal 
                        name="Button" 
                        handleFormModal={this.handleFormModal} 
                        widgetID ={this.props.widgetID}  
                        data={ButtonForm} 
                    >
                    </FormModal>}
                <center>
                    <h5>Tools for Card</h5>
                </center>
                <Button onClick={()=>this.handleFormModal(true, "ButtonForm")} type="primary" block> Button </Button>
            </div>
        )
    }
}


export default CardTools