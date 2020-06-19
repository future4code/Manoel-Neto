import React from 'react'
import { ShowDetails, Singer, Music, DetailsContainer,
    LoadingContainer, NameContainer, MusicLink, GetBackButton, 
    ButtonContainer, WrapDetails, AddContainer, InputContainer, InputLabel,
    DataInput, Svg, Button, DeleteContainer, Audio } from './Styled'
import axios from 'axios'

const axiosConfig = {
    headers: {
        Authorization: 'manoel-queiroz-neto-mello'
    }
}

export class PlaylistDetails extends React.Component {

    state = {
        nameInputValue: '',
        singerInputValue: '',
        urlInputValue: '',
        addMusic: false
    }

    onChangeName = (event) => {
        this.setState({
            nameInputValue: event.target.value,
        })
    }

    onChangeSinger = (event) => {
        this.setState({
            singerInputValue: event.target.value,
        })
    }

    onChangeUrl = (event) => {
        this.setState({
            urlInputValue: event.target.value,
        })
    }

    showAddMusic = () => {
        this.setState({
            addMusic: !this.state.showAddMusic
        })
    }

    getPlaylistsDetails() {

        const playlistDetails = this.props.details.map(detail => {
            const singerName = detail.artist
            const musicName = detail.name
            const musicUrl = detail.url

            return (
                <DetailsContainer key={detail.id}>
                    <Music>{musicName}</Music>
                    <Singer>{singerName}</Singer>
                    <MusicLink><Audio controls src={musicUrl}></Audio></MusicLink>
                    <DeleteContainer>
                        <Svg onClick={() => this.props.deleteSong(this.props.handleId, detail.id)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
                        </Svg>
                    </DeleteContainer>
                </DetailsContainer>
            )
        })
        return playlistDetails
    }

    addSongToPlaylist = (id) => {
        const handleData = {
            name: this.state.nameInputValue,
            artist: this.state.singerInputValue,
            url: this.state.urlInputValue
        }

        axios.post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, handleData, axiosConfig).then((response) => {
            window.alert(`Música: ${this.state.nameInputValue}\nArtista: ${this.state.singerInputValue}\nURL: ${this.state.urlInputValue}\nFoi adicionada com sucesso!`)
            this.setState({
                nameInputValue: '',
                singerInputValue: '',
                urlInputValue: '',
                addMusic: !this.state.addMusic
            })
            this.props.updateTracks(id)
        }).catch((e)=> {
            window.alert('Algo inesperado aconteceu.' + e)
            this.setState({
                nameInputValue: '',
                singerInputValue: '',
                urlInputValue: ''
            })
        })
    }

    render() {

        const id = this.props.handleId

        return(
            <ShowDetails>
                <NameContainer>
                    {this.props.playlistName}
                    <Svg  onClick={this.showAddMusic} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="24px" height="24px">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                    </Svg>
                </NameContainer>

                {this.state.addMusic && (
                <AddContainer>
                    <InputContainer>
                        <InputLabel>Adcionar nova música:</InputLabel>
                    </InputContainer>
                    <InputContainer>
                        <DataInput value={this.state.nameInputValue}
                                    onChange={this.onChangeName}
                                    placeholder='Nome da música'
                        />
                    </InputContainer>
                    <InputContainer>
                        <DataInput value={this.state.singerInputValue}
                                    onChange={this.onChangeSinger}
                                    placeholder='Cantorx/Banda'
                        />
                    </InputContainer>
                    <InputContainer>
                        <DataInput value={this.state.urlInputValue} 
                                    onChange={this.onChangeUrl}
                                    placeholder='Url da música'
                        />
                    </InputContainer>
                    <InputContainer>
                        <Button onClick={() => this.addSongToPlaylist(id)}>Adicionar</Button>
                    </InputContainer>
                </AddContainer>
                )}

                <WrapDetails>
                    {this.props.details.length === 0 && <LoadingContainer>Carregando...</LoadingContainer>}
                    {this.getPlaylistsDetails()}
                </WrapDetails>

                <ButtonContainer>
                    <GetBackButton onClick={this.props.getBack}>Voltar</GetBackButton>
                </ButtonContainer>
            </ShowDetails>
        )
    }
}