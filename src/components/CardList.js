import { get } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import Paper from 'material-ui/Paper'
import Grid from 'material-ui/Grid'
import customPropTypes from 'material-ui/utils/customPropTypes'
import { createStyleSheet } from 'jss-theme-reactor'
import SimpleAppBar from './AppBar'
import SimpleMediaCard from './ContentCard'

const styleSheet = createStyleSheet('CardList', (theme) => ({
  root: {
    flexGrow: 1,
    width: 'calc(100% - 50px)',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  layoutItem: {
  },
  card: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
}))

const CardList = ({ cards, onCardClick }, context) => {
  const classes = context.styleManager.render(styleSheet)

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Grid container gutter={24}>
          {cards.map(card =>
            <Grid key={card.id} className={classes.layoutItem} item xs={12} sm={6} md={4} lg={3} xl={3}>
              <SimpleMediaCard
                className={classes.card}
                title={card.title}
                text={card.text}
                imageUrl={get(card, 'metadata.card.og.image')}
                onClick={() => onCardClick(card.id)}
              />
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  )
}

CardList.contextTypes = {
  styleManager: customPropTypes.muiRequired,
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    selected: PropTypes.bool,
    text: PropTypes.string,
    title: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onCardClick: PropTypes.func
}

export default CardList
