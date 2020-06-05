import React from 'react';
import './App.css';
import { MainWrapper, ContentContainer, NavBarContainer, LogoSubContainer, LogoContainer, MenuContainer, 
MenuList, MenuItem, Moto, Title } from './Styled'
import { CreatePlaylist } from './components/CreatePlaylist/CreatePlaylist';
import { Playlists } from './components/Playlists/Playlists';
import axios from 'axios'


class App extends React.Component {

  state= {
    page: "create",
    playlists: []
  }

  renderPage = () => {
    switch(this.state.page){
      case 'list':
        return <Playlists playlistOnList={this.state.playlists} />
      
      case 'music':
        return

      default: 
      return <CreatePlaylist />
    }
  }

  onClickPlaylists = () => {
    this.setState({
      page: 'list'
    })
  }

  componentDidMount() {
    this.getPlaylists()
}

getPlaylists = () => {
    const axioConfig = {
        headers: {
            Authorization: 'manoel-queiroz-neto-mello'
        }
    }

    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', axioConfig).then((response) => {
        this.setState({
          playlists: response.data.result.list
        })
        console.log(response.data.result.list)
    }).catch((e) =>{
        window.alert('Ocorreu um erro ao enviar os dados.')
    })
}

  render() {
    return (
      <MainWrapper>
        <NavBarContainer>

          <LogoContainer>
              <LogoSubContainer>
              <Title>Labefy</Title>
              </LogoSubContainer>
              <LogoSubContainer>
                  <Moto>| Feitos de música, pela música.</Moto>
              </LogoSubContainer>
          </LogoContainer>

          <MenuContainer>
              <MenuList>
                  <MenuItem id="create">Criar Playlist</MenuItem>
                  <MenuItem id="list" onClick={this.onClickPlaylists} >Playlists</MenuItem>
                  <MenuItem id="addMusic">Add Música</MenuItem>
              </MenuList>
          </MenuContainer>

          </NavBarContainer>

        <ContentContainer>
        {this.renderPage()}
        </ContentContainer>
        
      </MainWrapper>
    );
  }
}

export default App;
