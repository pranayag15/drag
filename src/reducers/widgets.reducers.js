import {
    ADD_NEW_WIDGET,
    UPADTE_WIDGET_POSITION,
    UPADTE_WIDGET_SIZE
  } from "../actions/types";
  import update from "immutability-helper";
  
  const initState = {
    widgets: []
  };
  
  export default function(state = initState, action) {
    switch (action.type) {
      case ADD_NEW_WIDGET:
        let newWidget = state.widgets;
        state.widgets.push({
          widgetID: action.payload.widgetID,
          type: action.payload.widgetType,
          property : action.payload.widgetProperties
        });
        console.log(state.widgets, "local statee");
        console.log(state)
        return {
          ...state
        };
  
      case UPADTE_WIDGET_POSITION:
        var widgetIndex = state.widgets.findIndex(
          obj => obj.widgetID == action.payload.id
        );
        state.widgets = update(state.widgets, {
          [widgetIndex]: {
            position: {
              left: { $set: action.payload.position.x },
              top: { $set: action.payload.position.y }
            }
          }
        });
        return {
          ...state
        };
  
      case UPADTE_WIDGET_SIZE:
        var widgetIndex = state.widgets.findIndex(
          obj => obj.widgetID == action.payload.id
        );
        state.widgets = update(state.widgets, {
          [widgetIndex]: {
            size: {
              width: { $set: action.payload.size.offsetWidth },
              height: { $set: action.payload.size.offsetHeight }
            }
          }
        });
        return {
          ...state
        };
  
      default:
        return state;
    }
  }
  