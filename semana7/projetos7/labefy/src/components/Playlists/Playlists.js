import React from 'react'
import { ShowPlaylist, LoadingContainer, PlaylistContainer, PlaylistName, CreateButton } from './Styled'

export class Playlists extends React.Component {

    getPlaylists() {
        const playlistList = this.props.playlistOnList.map(playlist => {
            const playlistName = playlist.name

            return (
                <PlaylistContainer key={playlist.name}>
                    <PlaylistName>{playlistName}</PlaylistName>
                </PlaylistContainer>
            )
        })
        return playlistList
    }

    render() {
        
        const playlists = (this.props.playlistOnList === 0) ? <LoadingContainer>Carregando...</LoadingContainer> : this.getPlaylists()

        return(
            <ShowPlaylist>
                {playlists}
            </ShowPlaylist>
        )
    }
}