import {
    CREATE_NEW_WIDGET,
    ADD_NEW_FIELD,
    UPADTE_FIELD_POSITION,
    UPADTE_FIELD_SIZE
  } from "../actions/types";
  import update from "immutability-helper";
  
  const initState = {
    Widgets: {}
  };
  

  export default function(state = initState, action) {
    switch (action.type) {

      case CREATE_NEW_WIDGET:
        console.log(action)
        state.Widgets[action.payload.widgetID] = {
          Type:action.payload.WidgetType,
          childs:{},
          properties:[]
        }
        return {
          ...state
        };

      case ADD_NEW_FIELD:

        state.Widgets[action.payload.widgetID].childs[action.payload.fieldId]={
          type: action.payload.fieldType,
          position: action.payload.fieldPOsition,
          fieldData : action.payload.fieldData
        }
        return {
          ...state
        };
  
      case UPADTE_FIELD_POSITION:
        action.payload.position.map(val=>{
          state.Widgets[action.payload.widgetID].childs[val.i].position = {x:val.x, y:val.y, h:val.h, w:val.w}
        })
        
        return {
          ...state
        };
  
      case UPADTE_FIELD_SIZE:
        var widgetIndex = state.Widgets.findIndex(
          obj => obj.fieldId == action.payload.id
        );
        state.Widgets = update(state.Widgets, {
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
  