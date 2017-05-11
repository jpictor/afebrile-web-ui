import React from 'react'
import ReactDOM from 'react-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import appReducer from './reducers'
import App from './components/App'
import './index.css'
import { fetchPosts } from './actions'

injectTapEventPlugin()

const loggerMiddleware = createLogger()

let store = createStore(
  appReducer,
  applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    )
)

store.dispatch(fetchPosts('rootTopic')).then(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
