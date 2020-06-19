import styled from 'styled-components'

export const ShowPlaylist = styled.div`
    display: flex;
    max-width: 90vw;
    justify-content: space-between;
    min-height: 50vh;
    flex-wrap: wrap;
    padding: 10px 10px;
    flex-grow: 1;
`
export const PlaylistContainer = styled.div`
    border: 1px dashed white;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: column;
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
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    color: white;
`
export const NameContainer = styled.div`
    border: 1px solid white;
`
export const PlaylistName = styled.h2`
    margin: 10px 10px;
`
export const ButtonContainer = styled.div`
    display: flex;
    width: 50%;
    justify-content:space-between;
`
export const Button = styled.button`
    display: flex;
    border: none;
    background: #fc8003;
    color: white;
    padding: 5px;
    outline: none;
    font-size: 16px;
    border-radius: 5px;
    
    :hover {
        background: #ffaf5e;
    }
`
