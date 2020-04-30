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
import { addNewField } from "../../../actions/";
import { connect } from "react-redux";
const { Option } = Select;
const tailLayout = {
  wrapperCol: {
    offset: 19,
    span: 5,
  },
};

class ContactForm extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {};
  }

  onFinish = (values) => {
    console.log("form data", values);
    this.props.addNewField("Input", values);
    this.props.closeModal();
    this.formRef.current.resetFields();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  render() {
    console.log(this.props);
    return (
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
              name={["username"]}
              label="Field Name"
              rules={[
                {
                  required: true,
                  message: "Enter field name",
                },
              ]}
            >
              <Input placeholder="Field name is the name by which you get field data." />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["label"]}
              label="Label"
              rules={[
                {
                  required: true,
                  message: "Enter label name",
                },
              ]}
            >
              <Input placeholder="Label is what you see just above this input field." />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={["placeholder"]} label="Placeholder">
              <Input placeholder="Placeholder is this text that you are reading." />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["select"]}
              label="Field type"
              rules={[
                {
                  required: true,
                  message: "Please select field type",
                },
              ]}
            >
              <Select placeholder="Select field type to make validation easy.">
                <Option value="string">String</Option>
                <Option value="email">Email</Option>
                <Option value="number">Number</Option>
                <Option value="password">Password</Option>
                <Option value="textarea">Textarea</Option>
                <Option value="search">Search</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item name={["isrequired"]} label="Is required">
              <Switch
                defaultChecked
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item {...tailLayout}>
          <Button key="back" onClick={this.props.onCancel}>
            Cancel
          </Button>
          <Button style={{ marginLeft: "5%" }} htmlType="submit" type="primary">
            Add
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => ({
  widget: state.allWidgets,
});

const mapDispatchToProps = (dispatch) => ({
  addNewField,
});

export default connect(mapStateToProps, {
  addNewField,
})(ContactForm);
