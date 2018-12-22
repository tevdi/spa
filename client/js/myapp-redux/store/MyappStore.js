import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'
import { initialStates } from '../reducers'

export default function configureStore(props) {
    
    const { baseUrl, location } = props   
    const { configState } = initialStates;

    const initialState = {
        configState: { ...configState, baseUrl, location },
    }
    
    let composeEnhancers = typeof(window) !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(thunkMiddleware)
        )
    )

    return store
}