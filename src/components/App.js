import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import VisibleCardList from '../containers/CardList'
import AppLayout from './Layout.js'

const App = (props, context) => {
  return (
    <MuiThemeProvider>
      <AppLayout />
    </MuiThemeProvider>
  )
}

export default App
