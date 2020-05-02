import {
    ADD_NEW_FIELD,
    UPADTE_FIELD_POSITION,
    UPADTE_FIELD_SIZE
  } from "../actions/types";
  import update from "immutability-helper";
  
  const initState = {
    formFields: []
  };
  
  export default function(state = initState, action) {
    switch (action.type) {
      case ADD_NEW_FIELD:
        let newWidget = state.formFields;
        state.formFields.push({
          fieldId: action.payload.fieldId,
          type: action.payload.fieldType,
          position: action.payload.fieldPOsition,
          fieldData : action.payload.fieldData
        });
        return {
          ...state
        };
  
      case UPADTE_FIELD_POSITION:
        var widgetIndex = state.formFields.findIndex(
          obj => obj.fieldId == action.payload.id
        );
        state.formFields = update(state.formFields, {
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
        var widgetIndex = state.formFields.findIndex(
          obj => obj.fieldId == action.payload.id
        );
        state.formFields = update(state.formFields, {
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
  