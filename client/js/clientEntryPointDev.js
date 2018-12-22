import Myapp from './myapp/startup/MyappClient'
import React from 'react'
import ReactDOM from 'react-dom';

const props = {'baseUrl':'/'}

ReactDOM.render(<Myapp {...props}/>,
  document.getElementById('root'),
);
