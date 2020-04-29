import {
  ADD_NEW_INPUT_FIELD,
    UPADTE_INPUT_FIELD_POSITION,
    UPADTE_INPUT_FIELD_SIZE
  } from "../actions/types";
  import update from "immutability-helper";
  
  const initState = {
    inputFields: []
  };
  
  export default function(state = initState, action) {
    switch (action.type) {
      case ADD_NEW_INPUT_FIELD:
        let newWidget = state.inputFields;
        state.inputFields.push({
          inputFieldId: action.payload.inputFieldId,
          type: action.payload.fieldType,
          fieldData : action.payload.fieldData
        });
        return {
          ...state
        };
  
      case UPADTE_INPUT_FIELD_POSITION:
        var widgetIndex = state.inputFields.findIndex(
          obj => obj.inputFieldId == action.payload.id
        );
        state.inputFields = update(state.inputFields, {
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
  
      case UPADTE_INPUT_FIELD_SIZE:
        var widgetIndex = state.inputFields.findIndex(
          obj => obj.inputFieldId == action.payload.id
        );
        state.inputFields = update(state.inputFields, {
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
  