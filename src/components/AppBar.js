import React from 'react'
import { createStyleSheet } from 'jss-theme-reactor'
import customPropTypes from 'material-ui/utils/customPropTypes'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Text from 'material-ui/Text'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

const styleSheet = createStyleSheet('SimpleAppBar', () => ({
  root: {
    left: 'auto',
    right: 0
  },
  appBar: {
    left: 'auto',
    right: 0
  },
  flex: {
    flex: 1
  }
}))

const SimpleAppBar = (props, context) => {
  const classes = context.styleManager.render(styleSheet);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <IconButton contrast>
            <MenuIcon />
          </IconButton>
          <Text type="title" colorInherit className={classes.flex}>{props.title}</Text>
        </Toolbar>
      </AppBar>
    </div>
  )
}

SimpleAppBar.contextTypes = {
  styleManager: customPropTypes.muiRequired,
}

export default SimpleAppBar
