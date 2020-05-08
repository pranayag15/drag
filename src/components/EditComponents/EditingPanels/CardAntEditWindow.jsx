import React, { Component, version } from "react";
import { Form, Input, Button, Collapse } from "antd";
import Modal from "../EditModal";
import SelectFieldDynamicForm from "../AddFieldFroms/AddSelect";
import CardAddForm from "../AddFieldFroms/AddCardForm"

const { Panel } = Collapse;

class FormEditWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: []
    };
  }

  onFinish = (values) => {
    console.log("form data", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  callback = (key) => {
    console.log(key);
  };

  render() {
    console.log(this.props.widgetID)
    return (
      <div>
        <center>
          <h3>Create Cards</h3>
        </center>
        <div className="form-box">
          <Form
            layout="vertical"
            className="form-wrapper"
            style={{ width: "100%" }}
            ref={this.formRef}
            onFinish={this.onFinish}
            onValuesChange={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Enter Component name"
              className="form-field"
              name="componentname"
              rules={[{ required: true, message: "Please input component name!" }]}
            >
              <Input placeholder="Component Name" className="form-control" />
            </Form.Item>
          </Form>
        </div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          onChange={this.callback}
        >
          <Panel header="CARD" key="1">
            <center>
              <Modal
                widgetID = {this.props.widgetID}
                buttonValue="Add Antd Card"
                form={CardAddForm}
                modalHeading="Add Card Modal"
              />
            </center>
          </Panel>
          {/* <Panel header="SELECT" key="2">
            <center>
              <Modal
                buttonValue="Add Select options"
                form={SelectFieldDynamicForm}
                modalHeading="Select Options Modal"
              />
            </center>
          </Panel> */}
        </Collapse>
      </div>
    );
  }
}

export default FormEditWindow;
