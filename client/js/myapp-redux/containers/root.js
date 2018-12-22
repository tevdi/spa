import React from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom';
import Main from '../containers/Main'

const Root = (initialProps) => {
    return (
        <div>
            <Route path={initialProps.baseUrl} exact render={(props) => {
                return ( <Main {...initialProps} {...props} />)
            }}>
            </Route>
        </div>            
    )
}

const mapStateToProps = (state) => (
    {
        baseUrl: state.configState.baseUrl,
    }
)

export default connect(mapStateToProps)(Root)





 