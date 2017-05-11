import { get } from 'lodash'
import { connect } from 'react-redux'
import { toggleCard } from '../actions'
import SimpleLayout from '../components/Layout'

const mapStateToProps = (state) => {
  return {
    cards: state.postsByTopic.rootTopic.items.filter(i => get(i, 'metadata.card.og.image'))
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (id) => { dispatch(toggleCard(id)) }
  }
}

const VisibleCardList = connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleLayout)

export default VisibleCardList
