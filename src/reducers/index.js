import {combineReducers} from 'redux'
import widgetReducer  from './widgets.reducers'
export default combineReducers({
    allComponents: widgetReducer
})