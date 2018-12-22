import React from 'react'
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux'
import Root from '../containers/root'

const mainNode = () => {
    console.log('Redux Server rendering ...')
    const store = ReactOnRails.getStore('MyappStore')
    const { location } = store.getState().configState
    const context = {}
    const reactComponent = (
        <Provider store={store}>
            <StaticRouter location={location} context={context}>    
                <Root/>
            </StaticRouter>
        </Provider>
    )
    return reactComponent
}

export default mainNode