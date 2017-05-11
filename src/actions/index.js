export const INVALIDATE_TOPIC = 'INVALIDATE_TOPIC'
export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'

function requestPosts(topidId) {
  return {
    type: REQUEST_POSTS,
    topidId
  }
}

function receivePosts(topidId, posts) {
  return {
    type: RECEIVE_POSTS,
    topidId,
    posts: posts.map(post => post),
    receivedAt: Date.now()
  }
}

// Meet our first thunk action creator!
// Though its insides are different, you would use it just like any other action creator:
// store.dispatch(fetchPosts('reactjs'))
export function fetchPosts(topicId) {
  return function (dispatch) {
    dispatch(requestPosts(topicId))
    return fetch(`https://pictorlabs.com/api/content-hub/content?count=30&topicId=${topicId}`)
      .then(response => response.json())
      .then(posts => dispatch(receivePosts(topicId, posts)))
  }
}
