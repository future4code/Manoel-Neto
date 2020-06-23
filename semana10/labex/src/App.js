import React from 'react';
import { AppContainer } from './Styled'
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import { Routes } from './components/Routes/Routes'
import { useLocation } from 'react-router-dom'


function App() {

  const currentLocation = Routes().useLocation()

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#FFFFFF'
      },
      secondary: {
        main: '#557a95'
      }
    }
  })

  return (
    <MuiThemeProvider theme={theme}>
      <AppContainer>

        <NavBar />
        {Routes()}
        {currentLocation !== '/' &&
        <Footer />} 

      </AppContainer>
    </MuiThemeProvider>
  );
}

export default App;
