import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import VisibleCardList from '../containers/CardList'

const App = (props, context) => {
  return (
    <MuiThemeProvider>
      <VisibleCardList />
    </MuiThemeProvider>
  )
}

export default App
