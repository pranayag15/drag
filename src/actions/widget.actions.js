import {ADD_NEW_WIDGET,  UPADTE_WIDGET_POSITION, UPADTE_WIDGET_SIZE} from './types'

export const addNewWidget = (widgetType, widgetProperties) => {
    return {
        type: ADD_NEW_WIDGET,
        payload: {
            widgetID: Date.now(),
            widgetType,
            widgetProperties,
        }
    }
}

export const updateWidgetPosition = (id, position) => {
    return {
        type: UPADTE_WIDGET_POSITION,
        payload: {
            id,
            position
        }
    }
}

export const updateWidgetSize = (id, size) => {
    return {
        type: UPADTE_WIDGET_SIZE,
        payload: {
            id,
            size
        }
    }
}