import {
    CREATE_NEW_WIDGET,
    ADD_NEW_FIELD,
    UPADTE_FIELD_POSITION,
    UPADTE_FIELD_SIZE
  } from "../actions/types";
  import update from "immutability-helper";
  
  const initState = {
    Widgets: []
  };
  

  export default function(state = initState, action) {
    switch (action.type) {

      case CREATE_NEW_WIDGET:
        console.log(action)
        let newWidget = {}
        newWidget[action.payload.widgetID] = {
          Type:action.payload.WidgetType,
          childs:[],
          properties:[]
        }
        state.Widgets.push(newWidget);
        return {
          ...state
        };

      case ADD_NEW_FIELD:
        // let newWidget = state.Widgets;
        state.Widgets.map(val=>{
          if(val[action.payload.widgetID])
          val[action.payload.widgetID].childs.push({
            fieldID: action.payload.fieldId,
            type: action.payload.fieldType,
            position: action.payload.fieldPOsition,
            fieldData : action.payload.fieldData
          })
        })
        return {
          ...state
        };
  
      case UPADTE_FIELD_POSITION:
        var widgetIndex = state.Widgets.findIndex(
          obj => obj.fieldId == action.payload.id
        );
        state.Widgets = update(state.Widgets, {
          [widgetIndex]: {
            position: {  $set: action.payload.position}
            //   left: { $set: action.payload.position.x },
            //   top: { $set: action.payload.position.y }
            // }
          }
        });
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
  