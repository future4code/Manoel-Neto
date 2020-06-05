import React from 'react'
import { CreateContainer, CreateTitle, PlaylistName, PlaylistInput, CreateButton } from './Styled'
import axios from 'axios'

export class CreatePlaylist extends React.Component {
    state = {
        playlistValue: ''
    }

    playlistOnChange = (event) => {
        this.setState({
            playlistValue: event.target.value
        })
    }

    erasePlaylistValue = () => {
        this.setState({
            playlistValue: ''
        })
    }

    createPlaylist = () => {
        const axioConfig = {
            headers: {
                Authorization: 'manoel-queiroz-neto-mello'
            }
        }
        
        const handleData = {
            name: this.state.playlistValue
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', handleData, axioConfig).then((response) => {
            window.alert(`Yeaaaah! Playlist: ${this.state.playlistValue}, criada com sucesso.`)
            this.erasePlaylistValue()
        }).catch((e) =>{
            window.alert('Ocorreu um erro ao enviar os dados.')
            this.erasePlaylistValue()
        })
    }

    render() {
        return(
            <CreateContainer>
                <CreateTitle>Crie aqui sua playlist</CreateTitle>
                <PlaylistName>{this.state.playlistValue}</PlaylistName>
                <PlaylistInput value={this.state.playlistValue} onChange={this.playlistOnChange} />
                <CreateButton onClick={this.createPlaylist}>Criar</CreateButton>
            </CreateContainer>
        )
    }
}