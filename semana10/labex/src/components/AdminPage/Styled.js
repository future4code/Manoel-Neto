import styled from 'styled-components'

export const GreetingContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: auto;
    margin: 0 32px;
`

export const ActionContainer = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: 421px) and (max-width: 800px) {
        flex-direction: column;
    }

    @media (min-width: 320px) and (max-width: 420px) {
        flex-direction: column;
    }
`

export const ActionCard = styled.div`
    width: 400px;
    height: 200px;
    display: flex;
    border: 1px solid black;
    justify-content: center;
    align-items: center;

    @media (min-width: 801px) and (max-width: 1200px) {
        width: 280px;
    }
    @media (min-width: 421px) and (max-width: 800px) {
        height: 120px;
    }

    @media (min-width: 320px) and (max-width: 420px) {
        width: 300px;
        height: 120px;
    }
`