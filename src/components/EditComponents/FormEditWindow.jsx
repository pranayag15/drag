import React, { Component, version } from "react";
import { Form, Input, Button, Collapse } from "antd";
import Modal from "./EditModal";
import SelectFieldDynamicForm from "./AddFieldFroms/AddSelect";
import InputFieldForm from "./AddFieldFroms/AddInput"

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
          <h3>Create Form</h3>
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
              label="Enter form name"
              className="form-field"
              name="formname"
              rules={[{ required: true, message: "Please input form name!" }]}
            >
              <Input placeholder="Form Name" className="form-control" />
            </Form.Item>
          </Form>
        </div>
        <Collapse
          bordered={false}
          defaultActiveKey={["1"]}
          onChange={this.callback}
        >
          <Panel header="INPUT" key="1">
            <center>
              <Modal
                widgetID = {this.props.widgetID}
                buttonValue="Add Text Field"
                form={InputFieldForm}
                modalHeading="Input Add Modal"
              />
            </center>
          </Panel>
          <Panel header="SELECT" key="2">
            <center>
              <Modal
                buttonValue="Add Select options"
                form={SelectFieldDynamicForm}
                modalHeading="Select Options Modal"
              />
            </center>
          </Panel>
          <Panel header="RADIO" key="3">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              vitae a iure vel distinctio. Cumque voluptas cupiditate nam
              quisquam! At, ducimus ad necessitatibus reprehenderit repellendus
              saepe eaque doloremque atque alias.
            </p>
          </Panel>
          <Panel header="CHECKBOX" key="4">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              vitae a iure vel distinctio. Cumque voluptas cupiditate nam
              quisquam! At, ducimus ad necessitatibus reprehenderit repellendus
              saepe eaque doloremque atque alias.
            </p>
          </Panel>
          <Panel header="SWITCH" key="5">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              vitae a iure vel distinctio. Cumque voluptas cupiditate nam
              quisquam! At, ducimus ad necessitatibus reprehenderit repellendus
              saepe eaque doloremque atque alias.
            </p>
          </Panel>
          <Panel header="DATE-PICKER" key="6">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              vitae a iure vel distinctio. Cumque voluptas cupiditate nam
              quisquam! At, ducimus ad necessitatibus reprehenderit repellendus
              saepe eaque doloremque atque alias.
            </p>
          </Panel>
          <Panel header="SLIDER" key="7">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
              vitae a iure vel distinctio. Cumque voluptas cupiditate nam
              quisquam! At, ducimus ad necessitatibus reprehenderit repellendus
              saepe eaque doloremque atque alias.
            </p>
          </Panel>
        </Collapse>
      </div>
    );
  }
}

export default FormEditWindow;
