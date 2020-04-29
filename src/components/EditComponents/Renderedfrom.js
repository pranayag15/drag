import React, { Component } from "react";
import GridLayout from "react-grid-layout";
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
import "antd/dist/antd.css";
import "../../../node_modules/react-grid-layout/css/styles.css";
import "../../../node_modules/react-resizable/css/styles.css";

const { Option } = Select;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
};
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

  onLayoutChange = (layout, layouts) => {
    console.table(layout);
  };

  onFinish = (values) => {
    console.log("form data", values);
    this.props.closeModal();
    this.formRef.current.resetFields();
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    // console.log(this.props, "propsss")
    return (
      <div className="form-box">
        <Form
          {...layout}
          layout="vertical"
          className="form-wrapper"
          style={{ width: "100%" }}
          ref={this.formRef}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <GridLayout
            onLayoutChange={this.onLayoutChange}
            className="layout"
            cols={12}
            rowHeight={30}
            width={1200}
          >
            <div
              key="a"
              data-grid={{ x: 4, y: 0, w: 5, h: 2, minW: 4, maxH: 2 }}
            >
              <Form.Item
                name="username"
                label="username"
                rules={[
                  {
                    type: "",
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div
              key="b"
              data-grid={{ x: 4, y: 0, w: 5, h: 2, minW: 4, maxH: 2 }}
            >
              <Form.Item
                name="hululuul"
                label="hulullu"
                rules={[
                  {
                    type: "",
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Resizeable input field" />
              </Form.Item>
            </div>

          <div key="c" data-grid={{ x: 4, y: 0, w: 5, h: 2, minW: 4, maxH: 2 }}>
            <Form.Item
              name="radio-group"
              label="Radio.Group"
              rules={[{ required: true }]}
            >
              <Radio.Group>
                <Radio value="a">item 1</Radio>
                <Radio value="b">item 2</Radio>
                <Radio value="c">item 3</Radio>
              </Radio.Group>
            </Form.Item>
          </div>
          <div key="d" data-grid={{ x: 4, y: 0, w: 5, h: 2, minW: 4, maxH: 2 }}>
            <Form.Item
              name={["input", "select"]}
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
          </div>
          </GridLayout>
          <Form.Item name="slider" label="Slider">
            <Slider
              marks={{
                0: "Boring",
                20: "Paagal",
                40: "chutiya",
                60: "Big chutiya",
                80: "Legendary chutiya",
                100: "You",
              }}
            />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                type: "",
                required: false,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item name="checkbox-group" label="Checkbox.Group">
            <Checkbox.Group>
              <Row>
                <Col span={6}>
                  <Checkbox
                    value="A"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    A
                  </Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox
                    value="B"
                    style={{
                      lineHeight: "32px",
                    }}
                    disabled
                  >
                    B
                  </Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox
                    value="C"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    C
                  </Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox
                    value="D"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    D
                  </Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox
                    value="E"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    E
                  </Checkbox>
                </Col>
                <Col span={6}>
                  <Checkbox
                    value="F"
                    style={{
                      lineHeight: "32px",
                    }}
                  >
                    F
                  </Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </Form.Item>
          <Form.Item
            name="Search"
            label="Search Field"
            rules={[
              {
                type: "",
                required: false,
              },
            ]}
          >
            <Input.Search onSearch={(value) => console.log(value)} />
          </Form.Item>
          <Form.Item {...tailLayout}>
            {/* <center>
              <button htmlType="submit" className="contact-submit">
                Submit
              </button>
            </center> */}
            <Button key="back" onClick={this.props.onCancel}>
              Return
            </Button>
            <Button
              style={{ marginLeft: "5%" }}
              htmlType="submit"
              type="primary"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
