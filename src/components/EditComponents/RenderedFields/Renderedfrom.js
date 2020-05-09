import React, { Component } from "react";
import _ from 'lodash'
import { connect } from "react-redux";
import GridLayout from "react-grid-layout";
import { mapComponents } from "../../../helperFunction/create-form/switchFields";
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
import { updatePosition } from "../../../actions";
import "../../../../node_modules/react-grid-layout/css/styles.css";
import "../../../../node_modules/react-resizable/css/styles.css";

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

const initGrid = { x: 4, y: 0, w: 5, h: 2, minW: 4, maxH: 2 };

class ContactForm extends Component {
  formRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      currLayout: []
    }
  }

  onLayoutChange = (layout, layouts) => {
    console.log(layout)
    //COMMENT OUT BELOW TO STOP CALLING UPDATEfIELD FUNCTION
    var changedField = _.differenceWith(layout, this.state.currLayout, _.isEqual);
    console.log(changedField, "changesss")
    this.setState({ currLayout: layout })
    changedField.map((item, i) => {
      var { i, x, y, w, h } = item
      // this.props.updatePosition(i, { x, y, w, h })
      console.log(i, x, y, w, h)
    })
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
    console.log(this.props.allComponents.Widgets, "propsss", this.props.widgetID)
    var formFields = this.props.allComponents.Widgets[this.props.widgetID].childs
    // console.log(formFields, "curr")
    const mappedFields = Object.keys(formFields).map((item, i) => {
      // console.log(item, "item")
      return (
        <div key={item} data-grid={initGrid}>
          {mapComponents(formFields[item].type, formFields[item].fieldData)}
        </div>
      );
    });
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
            <div key="a" data-grid={initGrid}>
              <h1>try field</h1>
            </div>
           
            {mappedFields}

          </GridLayout>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allComponents: state.allComponents,
});

const mapDispatchToProps = (dispatch) => ({
  updatePosition,
});

export default connect(mapStateToProps, {
  updatePosition,
})(ContactForm);
