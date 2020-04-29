import {ADD_NEW_INPUT_FIELD,  UPADTE_INPUT_FIELD_POSITION, UPADTE_INPUT_FIELD_SIZE} from './types'

export const addNewInputField = (fieldType, fieldData) => {
    return {
        type: ADD_NEW_INPUT_FIELD,
        payload: {
            inputFieldId: Date.now(),
            fieldType,
            fieldData,
        }
    }
}

export const updateInputPosition = (id, position) => {
    return {
        type: UPADTE_INPUT_FIELD_POSITION,
        payload: {
            id,
            position
        }
    }
}

export const updateInputSize = (id, size) => {
    return {
        type: UPADTE_INPUT_FIELD_SIZE,
        payload: {
            id,
            size
        }
    }
}