import styled from 'styled-components'

export const ShowDetails = styled.div`
    display: flex;
    width: 90vw;
    flex-direction: column;
    min-height: 50vh;
    padding: 10px 10px;
`

export const WrapDetails = styled.div`
    display: flex;
    min-width: 100vh;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 10px 10px;
    flex-grow: 1;
`

export const DetailsContainer = styled.div`
    border: 1px dashed white;
    width: 300px;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
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
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 32px;
    margin: 10px;
`

export const AddContainer = styled.div`
    display: flex;
    margin: 10px;
    justify-content: space-evenly;
`

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const InputLabel = styled.span`
    color: white;
    font-size: 12px;
    margin: 10px;
`

export const DataInput = styled.input`
    color: white;
    border: 1px solid #fc8003;
    border-radius: 5px;
    background: transparent;
    padding: 5px;
    outline: none;
`
export const Button = styled.button`
    display: flex;
    border: none;
    background: #fc8003;
    color: white;
    padding: 5px;
    outline: none;
    border-radius: 5px;
    
    :hover {
        background: #ffaf5e;
    }
`

export const Singer = styled.span`
    color: white;
`

export const Music = styled.span`
    color: #fc8003;
    margin-top: 10px;

`
export const MusicLink = styled.span`
    margin: 10px 0%;

    :visited {
        color: white;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
`

export const GetBackButton = styled.div`
    color: white;
    border: none;
    background:#fc8003;
    padding: 10px;
    border-radius: 5px;
    font-size: 16px;

    :hover{
        background: #ffaf5e;
    }
`

export const Svg = styled.svg`
    fill: white;
    margin: 0 15px;

    :hover{
        fill: #fc8003;;
    }
`

export const DeleteContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
`
export const Audio = styled.audio`
    width: 250px;
    height: 20px;
`