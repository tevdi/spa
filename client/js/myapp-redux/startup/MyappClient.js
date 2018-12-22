import React from 'react'
require('../../../sass/layout.scss')
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import Root from '../containers/root'

const mainNode = () => {
    console.log('Redux Client rendering ...')
    const store = ReactOnRails.getStore('MyappStore')
    const history = syncHistoryWithStore(createBrowserHistory(), store)    
    const reactComponent = (
        <Provider store={store}>
            <Router history={ history }>
                <Switch>
                    <Root/>
                </Switch>
            </Router>
        </Provider>
    )
    return reactComponent
}

export default mainNode