import thunkMiddleware from 'redux-thunk'
import React from 'react'
import { BrowserRouter as Router, Route, Switch, HashRouter } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux'
import Root from './myapp-redux/containers/root'
import configureStore from './myapp-redux/store/MyappStore'
import ReactDOM from 'react-dom';

const props = {'baseUrl':'/'}
const store = configureStore(props);
const history = syncHistoryWithStore(createBrowserHistory(), store)    

console.log('Redux Client rendering ...')

ReactDOM.render(<Provider store={store}>
            <Router history={ history }>
                <Switch>
                    <Root/>
                </Switch>
            </Router>
        </Provider>,
  document.getElementById('root'),
);
