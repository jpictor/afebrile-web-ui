import { get } from 'lodash'
import React,  { PropTypes } from 'react'
import Paper from 'material-ui/Paper'
import Layout from 'material-ui/Layout'
import customPropTypes from 'material-ui/utils/customPropTypes'
import { createStyleSheet } from 'jss-theme-reactor'
import SimpleAppBar from './AppBar'
import SimpleMediaCard from './ContentCard'

const styleSheet = createStyleSheet('SimpleLayout', (theme) => ({
  root: {
    flexGrow: 1
  },
  layoutItem: {
  },
  card: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}))

const SimpleLayout = ({ cards, onCardClick }, context) => {
  const classes = context.styleManager.render(styleSheet)

  return (
    <Layout container className={classes.root}>
      <Layout item xs={12}>
        <Layout container justify="center" gutter={24}>
          {cards.map(card =>
            <Layout key={card.id} className={classes.layoutItem} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <SimpleMediaCard
                className={classes.card}
                title={card.title}
                text={card.text}
                imageUrl={get(card, 'metadata.card.og.image')}
                onClick={() => onCardClick(card.id)}
              />
            </Layout>
          )}
        </Layout>
      </Layout>
    </Layout>
  )
}

SimpleLayout.contextTypes = {
  styleManager: customPropTypes.muiRequired,
}

SimpleLayout.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    selected: PropTypes.bool,
    text: PropTypes.string,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCardClick: PropTypes.func
}

export default SimpleLayout
