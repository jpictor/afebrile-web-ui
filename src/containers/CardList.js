import { get } from 'lodash'
import { connect } from 'react-redux'
import { toggleCard } from '../actions'
import CardList from '../components/CardList'
import { isNonEmptyArray } from '../util'

const getCardArray = (state) => {
  if (isNonEmptyArray(state.postsByTopic.rootTopic.items)) {
    return state.postsByTopic.rootTopic.items.filter(i => get(i, 'metadata.card.og.image'))
  }
  return []
}

const mapStateToProps = (state) => {
  return {
    cards: getCardArray(state)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (id) => { dispatch(toggleCard(id)) }
  }
}

const CardListConnected = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardList)

export default CardListConnected
