import styled from 'styled-components'

export const CreateContainer = styled.div`
    border: 1px dashed white;
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 200px;
`
export const CreateTitle = styled.h3`
    color: #fc8003;
`
export const PlaylistName = styled.div`
    color: white;
    font-size: 32px;
    margin: 0 10px;
`
export const PlaylistInput = styled.input`
    border: 1px solid #fc8003;
    background: black;
    color: white;
    padding: 5px;
    border-radius: 5px;
    outline: none;
`
export const CreateButton = styled.button`
    background: #fc8003;
    margin: 10px;
    color: white;
    outline: none;
    border: none;
    border-radius: 5px;
    font-size: 32px;

    :hover {
        background:#ffaf5e
    }
`
export const Check = styled.span`
    color: ${props =>{
        if(props.color === 'green'){
            return 'green'
        } else {
            return 'red'
        }
    }};
    
    margin: 5px 0;
    align-self: flex-end;
`
export const CheckContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`