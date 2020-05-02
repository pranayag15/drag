import React, { Component } from "react";
import {
  Form,
  Select,
  Input,
  InputNumber,
  Row,
  Col,
} from "antd";
export const mapField = (field) => {
  // var mappedFields = data.map((field, i) => {
    let name = field["name"] ? field["name"] : "field" + (1);
    let label = field["label"] ? field["label"] : "Enter field" + (1);
    let placeholder = field["placeholder"] ? field["placeholder"]: ""
    let inputType = inputTypeSwitch(field["type"], placeholder);
    let type =
      field["type"] == "email" || field["type"] == "number"
        ? field["type"]
        : "";
    let required = field["isrequired"] ? field["isrequired"] : false;
    return (<Form.Item
        name={name}
        label={label}
        rules={[
            { 
                type: {type}, 
                required: {required} 
            }
        ]}
      >
        {inputType}
      </Form.Item>
    );
  // });
};

function inputTypeSwitch(type, placeholder) {
  switch (type) {
    case "number":
      return (<InputNumber placeholder={placeholder}  style={{width: '100%'}} />);
    case "search":
      return (<Input.Search placeholder={placeholder}  onSearch={value => console.log(value)} />);
    case "textarea":
      return (<Input.TextArea placeholder={placeholder}  rows={4} />);
    case "password":
      return( <Input.Password placeholder={placeholder} />);
    case "email":
    case "string":
    default:
      return (<Input placeholder={placeholder} />);
  }
}
