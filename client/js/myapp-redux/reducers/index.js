import { combineReducers }  from 'redux'
import { routerReducer as routing } from 'react-router-redux';

import configReducer from './configReducer'

import { initialState as configState } from './configReducer'

export default combineReducers({
    configState: configReducer,
    routing,
})

export const initialStates = {
    configState,
}
