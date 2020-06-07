import React from 'react'
import { CreateContainer, CreateTitle, PlaylistName, PlaylistInput, CreateButton, Check, CheckContainer } from './Styled'
import axios from 'axios'

const axiosConfig = {
    headers: {
        Authorization: 'manoel-queiroz-neto-mello'
    }
}

export class CreatePlaylist extends React.Component {
    state = {
        playlistValue: '',
        available: ''
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
        const handleData = {
            name: this.state.playlistValue
        }

        axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', handleData, axiosConfig).then((response) => {
            window.alert(`Yeaaaah! Playlist: ${this.state.playlistValue}, criada com sucesso.`)
            this.erasePlaylistValue()
        }).catch((e) =>{
            window.alert('Ocorreu um erro ao enviar os dados.')
            this.erasePlaylistValue()
        })
    }

    checkAvailability = (arr, val) => {
        return arr.some(arrVal => val === arrVal.name);
    }

    render() {

        
        const availability = this.state.playlistValue === ''  ? <span></span> : 
        this.checkAvailability(this.props.checkName, this.state.playlistValue) ?  <Check color="red">Existente</Check>: <Check color="green">Disponivel</Check>

        return(
            <CreateContainer>
                <CreateTitle>Crie aqui sua playlist</CreateTitle>
                <PlaylistName>{this.state.playlistValue}</PlaylistName>
                <CheckContainer>
                    <PlaylistInput value={this.state.playlistValue} onChange={this.playlistOnChange} />
                    {availability}
                </CheckContainer>
                {(this.state.playlistValue !== '' && !this.checkAvailability(this.props.checkName, this.state.playlistValue)) &&
                <CreateButton onClick={this.createPlaylist}>Criar</CreateButton>}
            </CreateContainer>
        )
    }
}