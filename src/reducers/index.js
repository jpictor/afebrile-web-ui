import { combineReducers } from 'redux'
import { INVALIDATE_TOPIC, REQUEST_POSTS, RECEIVE_POSTS } from '../actions'

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case INVALIDATE_TOPIC:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsByTopic(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_TOPIC:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.topidId]: posts(state[action.topidId], action)
      })
    default:
      return state
  }
}

const appReducer = combineReducers({
  postsByTopic
})

export default appReducer
