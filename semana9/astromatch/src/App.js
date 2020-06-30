import React, { useState, useEffect } from 'react';
import './App.css';
import styled, { createGlobalStyle } from 'styled-components'
import AppBar from './components/AppBar/AppBar'
import Matches from './components/Matches/Matches';
import Home from './components/Home/Home';
import ResetMatches from './components/ResetMatches/ResetMatches';
import axios from 'axios'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'



const ContainerAll = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const MainContainer = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid black;
  border-radius: 10px;
  background: linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%);
  box-shadow: 0 0 5px #0000000F;
`
const theme = createMuiTheme({
	palette: {
		primary: {
			main: "#22c1c3"
		},
		secondary: {
			main: "#FFFFFF"

        }
    } 
})

function App() {

  const [page, setNewPage] = useState('home')

  const changePage = () => {
    if(page === 'home'){
      setNewPage('matches')
    } else {
      setNewPage('home')
    }
  }

  const [ matches, setMatches ] = useState([])

    const getMatches = () => {
        axios
        .get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/manoelneto/matches')
        .then(response => {
            setMatches(response.data.matches)
        })
        .catch(e => {
            alert('Houve um erro ao carregar seus matches.')
        })
    }


    useEffect(() => {
        getMatches()
    }, [])


  const currentPage = page === 'home' ? <Home getMatches={getMatches} /> : <Matches matches={matches} />
  return (
    <MuiThemeProvider theme={theme}>
      <ContainerAll>
        <MainContainer>
          <AppBar
            changePage={changePage}
            iconChange ={page}
            matches={matches}
          />
          {currentPage}
        </MainContainer>
        <ResetMatches getMatches={getMatches}/>
      </ContainerAll> 
      </MuiThemeProvider>
  )
}

export default App;
