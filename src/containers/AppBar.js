import { get } from 'lodash'
import { connect } from 'react-redux'
import { toggleCard } from '../actions'
import AppAppBar from '../components/AppBar'

const mapStateToProps = (state) => {
  return {
    loadingAnimation: state.postsByTopic.rootTopic.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMenuSelect: (id) => { }
  }
}

const AppAppBarConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppAppBar)

export default AppAppBarConnected
