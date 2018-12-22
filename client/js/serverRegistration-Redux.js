import ReactOnRails from 'react-on-rails'
import Myapp from './myapp-redux/startup/MyappServer'
import configureStore from './myapp-redux/store/MyappStore'

ReactOnRails.register({ Myapp })
ReactOnRails.registerStore({ MyappStore: configureStore })
