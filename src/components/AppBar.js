import React from 'react'
import PropTypes from 'prop-types'
import { createStyleSheet } from 'jss-theme-reactor'
import customPropTypes from 'material-ui/utils/customPropTypes'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'
import { LinearProgress } from 'material-ui/Progress'

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
  },
  progress: {
    width: '100%',
    height: 2,
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 200
  }
}))

const AppAppBar = (props, context) => {
  const classes = context.styleManager.render(styleSheet)
  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} accent={false}>
        { props.loadingAnimation && <LinearProgress className={classes.progress} /> }
        <Toolbar>
          <IconButton contrast>
            <MenuIcon />
          </IconButton>
          <Typography type="title" colorInherit className={classes.flex}>{props.title}</Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

AppAppBar.contextTypes = {
  styleManager: customPropTypes.muiRequired,
}

AppAppBar.propTypes = {
  loadingAnimation: PropTypes.bool
}

export default AppAppBar
