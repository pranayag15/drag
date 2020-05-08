import React, { Component } from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
} from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";

import "antd/dist/antd.css";
import "./addForm.css";
import { addNewField } from "../../../actions";
import { connect } from "react-redux";
const { Option } = Select;
const tailLayout = {
  wrapperCol: {
    offset: 19,
    span: 5,
  },
};

const initPos = { x: 4, y: 0, w: 5, h: 2, minW: 4, maxH: 2 };

class ContactForm extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      button: false
    };
  }

  onFinish = (values) => {
    console.log("form data", values);
    this.props.addNewField(this.props.widgetID, "Card", values, initPos);
    this.props.closeModal();
    this.formRef.current.resetFields();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  onChange = (name, value) => {
    console.log(name, value)
    this.setState({button: value})
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <Form
          initialValues={{ isrequired: true }}
          layout="vertical"
          ref={this.formRef}
          onFinish={this.onFinish}
          className="my-form"
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="title"
                label="Card Title"
                rules={[
                  {
                    //required: true,
                    message: "Enter title",
                  },
                ]}
              >
                <Input placeholder="Enter title of card if any" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name={["description"]}
                label="Description"
                rules={[
                  {
                    //required: true,
                    message: "Enter description if any",
                  },
                ]}
              >
                <Input placeholder="Description of card" />
              </Form.Item>
            </Col>
            <Col span={12}>
                <Form.Item 
                  name="textalignment"
                  label="Text Alignment"
                >
                  <Select placeholder="Enter the alignment of the text" >
                    <Option value="left">Left</Option>
                    <Option value="center">Center</Option>
                    <Option value="right">Right</Option>
                  </Select>
                </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name={["image"]} label="Image URL">
                <Input placeholder="Enter image url if any" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name={["imageheight"]} label="Card image height" rules={[{type: "number"}]}>
                <InputNumber style={{width: '100%'}} placeholder="Image height in px (default: 180px)" />
              </Form.Item>
            </Col>
            {/* <Col span={12}>
              <Form.Item name={["width"]} label="Card width">
                <Input placeholder="Width in points (200, 300, 400 ...)" />
              </Form.Item>
            </Col> */}
            <Col span={12}>
              <Form.Item name="switch" label="Add Button">
                <Switch onChange={(checked) => this.onChange("button", checked)} />
              </Form.Item>
            </Col>
            {this.state.button && <Col span={12}>
              <Form.Item name={["buttontext"]} label="Button Text">
                <Input placeholder="Enter button text" />
              </Form.Item>
            </Col>}
            {this.state.button && <Col span={12}>
              <Form.Item name={["buttoncolor"]} label="Button Color">
                <Input type="color" placeholder="Enter button color" />
              </Form.Item>
            </Col>}
            {this.state.button && <Col span={12}>
              <Form.Item name={["buttontextcolor"]} label="Button Text Color">
                <Input type="color" placeholder="Enter button text color" />
              </Form.Item>
            </Col>}

          </Row>
          <Form.Item {...tailLayout}>
            <Button key="back" onClick={this.props.onCancel}>
              Cancel
            </Button>
            <Button
              style={{ marginLeft: "5%" }}
              htmlType="submit"
              type="primary"
            >
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
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
})(ContactForm);
