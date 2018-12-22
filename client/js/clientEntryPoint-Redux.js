import ReactOnRails from 'react-on-rails'
import Myapp from './myapp-redux/startup/MyappClient'
import configureStore from './myapp-redux/store/MyappStore'

ReactOnRails.register({ Myapp })
ReactOnRails.registerStore({ MyappStore: configureStore })
