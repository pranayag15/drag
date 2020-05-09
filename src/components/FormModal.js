import React, { Component, Fragment } from 'react'
import { Form, Input, Button, Checkbox, Upload } from 'antd';
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';
import './FormModal.css'
import { connect } from 'react-redux'
import { addNewField } from '../actions/widget.actions'
class FormModal extends Component {
    state ={
        values:{}
    }
    componentDidMount(){
        this.setState({
            values : this.props.data[0].initialValues
        })
    }
    onFinish = values => {
        console.log('Success:', values);
        let widgetID = this.props.widgetID
        let fieldData = values
        let fieldType = this.props.name
        let fieldPOsition = { x: 4, y: 0, w: 1, h: 2 }
        this.props.addNewField(
            widgetID, fieldType, fieldData, fieldPOsition
        )
        this.props.handleFormModal(false, null)
    };

    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    handleCancel = () => {
        console.log("hi")
        this.props.handleFormModal(false, null)
    }
    handleChange = (changedValues , allValues) =>   {
        // console.log(allValues)
        this.setState({
            values:allValues
        })
    }
    render() {
        const normFile = e => {
            console.log('Upload event:', e);
            if (Array.isArray(e)) {
                return e;
            }
            return e && e.fileList;
        };
        const layout = {
            // labelCol: { span: 8 },
            // wrapperCol: { span: 16 },
        };
        // const tailLayout = {
        //     wrapperCol: { offset: 8, span: 16 },
        // };
        console.log(this.state)
        return (
            <div className="container-fluid">
                <div className="FormModalBackground" >
                    {/* asdasdasd */}
                </div>
                <div className="FormModalBody" >
                    <br></br>
                    <br></br>
                    <center><h5>Enter the required fields to create {this.props.name} </h5></center>
                    <div className="container-fluid">
                        <Form
                            name="basic"
                            initialValues={this.props.data[0].initialValues}
                            onFinish={this.onFinish}
                            onFinishFailed={this.onFinishFailed}
                            onValuesChange={this.handleChange}
                        >
                            <div className="row">
                                {
                                    this.props.data ? (
                                        this.props.data.map((val, index) =>
                                            index > 0 ? (
                                                val.type == "file" ? (
                                                    <div className="col-sm-6">
                                                        <Form.Item
                                                            name="upload"
                                                            label="Upload"
                                                            valuePropName="fileList"
                                                            getValueFromEvent={normFile}
                                                            extra="longgggggggggggggggggggggggggggggggggg"
                                                        >
                                                            <Upload name="logo" method="get" action="\" listType="picture">
                                                                <Button>
                                                                    <UploadOutlined /> Click to upload
                                                                </Button>
                                                            </Upload>
                                                        </Form.Item>
                                                    </div>
                                                ) :
                                                    (
                                                        <div className="col-sm-6">
                                                            <Form.Item
                                                                label={val.name}
                                                                name={val.name}
                                                                rules={[{ required: val.required, message: 'Please input your ' + val.name + '!' }]}
                                                            >
                                                                <Input type={val.type} />
                                                            </Form.Item>
                                                        </div>
                                                    )

                                            ) :
                                                (<></>)
                                        )

                                    ) :
                                        (
                                            <div> </div>
                                        )
                                }

                            </div>
                            <div className="container">
                                <center>

                                    {this.state.values.font_size && <p style={{fontSize:this.state.values.font_size+"px", color:this.state.values.font_color}} >
                                        Magic UI
                                        </p>}

                                    <Form.Item >
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                        &nbsp;&nbsp;
                                        <Button onClick={() => this.handleCancel()} type="primary">
                                            Cancel
                                        </Button>
                                    </Form.Item>
                                </center>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>

        )
    }
}
const mapStateToProps = (state) => ({
    formFields: state.allComponents,
});

const mapDispatchToProps = (dispatch) => ({
    addNewField,
});

export default connect(mapStateToProps, {
    addNewField,
})(FormModal);
