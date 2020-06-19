import React from 'react'
import { ShowPlaylist, LoadingContainer, PlaylistContainer, PlaylistName, Button, ButtonContainer } from './Styled'
import { PlaylistDetails } from '../PlaylistDetails/PlaylistDetails'

export class Playlists extends React.Component {

    state = {
        playlistDetailsShow: 'list', 
        playlistName: '',
        id: ''
    }

    chageDetailsState = (id, name) => {
        this.setState({
            playlistDetailsShow: 'detailedList',
            playlistName: name,
            id: id
        })
        this.props.getDetails(id)  
    }

    onClickList = () => {
        this.setState({
            playlistDetailsShow: 'list'
        })
    }

    getPlaylists() {
        const playlistList = this.props.playlistOnList.map(playlist => {
            const playlistName = playlist.name

            return (
                <PlaylistContainer key={playlist.name}>
                    <PlaylistName>{playlistName}</PlaylistName>
                    <ButtonContainer>
                        <Button onClick={() => this.chageDetailsState(playlist.id, playlist.name)} >Abrir</Button>
                        <Button onClick={() => this.props.deletePlaylist(playlist.id, playlist.name)} >Excluir</Button>
                    </ButtonContainer>
                </PlaylistContainer>
            )
        })
        return playlistList
    }


    render() {

        return(
            <ShowPlaylist>
                {this.props.playlistOnList.length === 0 && <LoadingContainer>Carregando...</LoadingContainer>}
                {this.state.playlistDetailsShow === 'list' ? this.getPlaylists() : <PlaylistDetails playlistName={this.state.playlistName}
                                                                                                    handleId={this.state.id}
                                                                                                    details={this.props.detailedState} 
                                                                                                    getBack={this.onClickList}
                                                                                                    updateTracks={this.props.getDetails}
                                                                                                    deleteSong={this.props.deleteSong}
                                                                                    />}
            </ShowPlaylist>
        )
    }
}