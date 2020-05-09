import {CREATE_NEW_WIDGET, ADD_NEW_FIELD,  UPADTE_FIELD_POSITION, UPADTE_FIELD_SIZE} from './types'

export const createNewWidget = (WidgetType, widgetID)=>{
    return{
        type: CREATE_NEW_WIDGET,
        payload: {
            widgetID,
            WidgetType
        }
    }
}


export const addNewField = (widgetID, fieldType, fieldData, fieldPOsition) => {
    return {
        type: ADD_NEW_FIELD,
        payload: {
            fieldId: Date.now(),
            widgetID,
            // fieldId: "a",
            fieldType,
            fieldPOsition,
            fieldData,
        }
    }
}

export const updatePosition = (widgetID, position) => {

    return {
        type: UPADTE_FIELD_POSITION,
        payload: {
            widgetID,
            position
        }
    }
}

export const updateFieldSize = (id, size) => {
    return {
        type: UPADTE_FIELD_SIZE,
        payload: {
            id,
            size
        }
    }
}