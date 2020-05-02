import {ADD_NEW_FIELD,  UPADTE_FIELD_POSITION, UPADTE_FIELD_SIZE} from './types'

export const addNewField = (fieldType, fieldData, fieldPOsition) => {
    return {
        type: ADD_NEW_FIELD,
        payload: {
            fieldId: Date.now(),
            // fieldId: "a",
            fieldType,
            fieldPOsition,
            fieldData,
        }
    }
}

export const updatePosition = (id, position) => {
    return {
        type: UPADTE_FIELD_POSITION,
        payload: {
            id,
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