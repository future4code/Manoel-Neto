import styled from 'styled-components'

export const ShowPlaylist = styled.div`
    display: flex;
    max-width: 90vw;
    justify-content: space-between;
    min-height: 70vh;
    flex-wrap: wrap;
    padding: 10px 10px;
    margin: 10px;
`
export const PlaylistContainer = styled.div`
    border: 1px dashed white;
    min-width: 250px;
    min-height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;
    color: white;
    
    :hover {
        border: 1px solid #fc8003;
        color: #fc8003;
    }
`
export const LoadingContainer = styled.div`
    color: white;
`
export const PlaylistName = styled.h2`
    margin: 10px 10px;
`
