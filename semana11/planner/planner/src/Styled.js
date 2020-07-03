import styled from 'styled-components'

export const AppContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    margin: 32px 0;
    align-items: flex-start;
    
`
export const PlannerContainer = styled.div`
    width: 90vw;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    
    hr {
        color: black;
        width: 100%;
    }
`