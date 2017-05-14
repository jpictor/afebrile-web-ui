import { get } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import customPropTypes from 'material-ui/utils/customPropTypes'
import { createStyleSheet } from 'jss-theme-reactor'
import AppAppBarConnected from '../containers/AppBar'
import CardListConnected from '../containers/CardList'

const styleSheet = createStyleSheet('SimpleLayout', (theme) => ({
  root: {
    width: '100%'
  }
}))

const AppLayout = ({ cards, onCardClick }, context) => {
  const classes = context.styleManager.render(styleSheet)

  return (
    <div className={classes.root}>
      <AppAppBarConnected title="Afebrile"/>
      <CardListConnected />
    </div>
  )
}

AppLayout.contextTypes = {
  styleManager: customPropTypes.muiRequired,
}

export default AppLayout
