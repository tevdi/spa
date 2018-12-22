import React, { Component } from 'react';
import { connect } from 'react-redux'
import Actions from '../actions/Actions';
import { Link } from 'react-router-dom'

class App2 extends React.Component {    
    componentDidMount() {
    }
        
    render() {
            return (
                <div>
                    <h2>Getting started with React</h2>
                </div>  
            );
    }
}

const mapStateToProps = (state) => (
    {
        baseUrl: state.configState.baseUrl,
    }
)

export default connect(mapStateToProps)(App2)