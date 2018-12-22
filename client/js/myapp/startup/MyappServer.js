import React from 'react'
import Main from '../Main'
import { StaticRouter, Route } from 'react-router'

export default (initialProps) => {
    const context = {}
    console.log('Server rendering ...')
    return (
          <StaticRouter location={initialProps.location} context={context} >
            <div>
                <Route path={initialProps.baseUrl} exact render={(props) => {
                    return ( <Main {...initialProps} {...props} />)
                }}>
                </Route>
            </div>          
        </StaticRouter>
    )
}
