import React from 'react';
import './App.css';
import { MainWrapper, ContentContainer, NavBarContainer, LogoSubContainer, LogoContainer, MenuContainer, 
MenuList, MenuItem, Moto, Title } from './Styled'
import { CreatePlaylist } from './components/CreatePlaylist/CreatePlaylist';
import { Playlists } from './components/Playlists/Playlists';
import axios from 'axios'


const axiosConfig = {
  headers: {
      Authorization: 'manoel-queiroz-neto-mello'
  }
}

class App extends React.Component {

  state= {
    page: 'home',
    playlists: [],
    detailedPlaylist: []
  }

  renderPage = () => {
    switch(this.state.page){
      case 'list':
        return <Playlists playlistOnList={this.state.playlists} 
                          deletePlaylist={this.confirmDelete}
                          getDetails={this.getPlayListDetails}
                          detailedState={this.state.detailedPlaylist}
                          deleteSong={this.deleteSong}
                />
      
      case 'music':
        return

      default: 
      return <CreatePlaylist checkName={this.state.playlists} />
    }
  }

  onClickPlaylists = () => {
    this.setState({
      page: 'list'
    })
  }

  onClickHome = () => {
    this.setState({
      page: 'home'
    })
  }

  componentDidMount() {
    this.getPlaylists()
  }

  componentDidUpdate() {
    this.getPlaylists()
  }

getPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', axiosConfig).then((response) => {
        this.setState({
          playlists: response.data.result.list
        })
    }).catch((e) =>{
        window.alert('Ocorreu um erro ao enviar os dados.' + e)
    })
}

deletePlaylist = playlistId => {
  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, axiosConfig).then((response) => {
      window.alert('PlayList deletado com sucesso!')
      this.getPlaylists()
  }).catch((e) => {
      window.alert('Houve um erro ao deletar o playlist.' + e)
  })
}

getPlayListDetails = detailsId => {
  axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${detailsId}/tracks`, axiosConfig).then((response) => {
    this.setState({
      detailedPlaylist: response.data.result.tracks
    })
  }).catch((e) => {
    window.alert('Houve um erro inesperado!')
  })
}

deleteSong = (playlistId, songId) => {
  axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks/${songId}`, axiosConfig).then((response) => {
    window.alert('Música excluida com sucesso.')
    this.getPlayListDetails(playlistId)
  }).catch((e) => {
    window.alert('Houve um erro ao deletar sua música!')
  })
}

confirmDelete = (id, name) => {
  const confirmMessage = window.confirm(`Tem certeza que deseja excluir a playlist: ${name} ?`)
  confirmMessage ? this.deletePlaylist(id) : alert('Playlist nao foi deleteda!')
}

  render() {
    return (
      <MainWrapper>
        <NavBarContainer>

          <LogoContainer>
              <LogoSubContainer>
              <Title onClick={this.onClickHome}>Labefy</Title>
              </LogoSubContainer>
              <LogoSubContainer>
                  <Moto>| Feitos de música, pela música.</Moto>
              </LogoSubContainer>
          </LogoContainer>

          <MenuContainer>
              <MenuList>
                  <MenuItem id="create" onClick={this.onClickHome}>Criar Playlist</MenuItem>
                  <MenuItem id="list" onClick={this.onClickPlaylists} >Playlists</MenuItem>
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
