import React from 'react';
import { AppContainer } from './Styled'
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core'
import { Routes } from './components/Routes/Routes'
import { useParams } from 'react-router-dom';

function App() {

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
        <Footer />

      </AppContainer>
    </MuiThemeProvider>
  );
}

export default App;
