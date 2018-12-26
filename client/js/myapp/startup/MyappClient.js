import React from 'react'
import Main from '../Main'
import {
      BrowserRouter as Router,
      Route,
      Link
} from 'react-router-dom'

export default (initialProps) => {
    console.log('Client rendering ...')
    return (            
        <Router>  
            <div>
                <Route path={initialProps.baseUrl} exact render={(props) => {
                    return ( <Main {...initialProps} {...props} />)
                }}>
                </Route>
            </div>    
        </Router>
    )
}
