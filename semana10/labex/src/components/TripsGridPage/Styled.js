import styled from 'styled-components'

export const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 72vh;
`
export const TripsLogo = styled.div`
    margin: 32px;
    align-self: center;
    height: auto;
`

export const TripsGridContainer = styled.div`
    flex: 1;
    display: grid;
    grid-auto-flow: auto;
    gap: 16px;
    margin: 0 32px;
    padding: 16px 0;

    @media (min-device-Width: 1201px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (min-device-Width: 801px) and (max-device-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
    }
    @media (min-device-width: 421px) and (max-device-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-device-width: 320px) and (max-device-width: 420px) {
        grid-template-columns: repeat(1, 1fr);
    }

`


export const CardContainer = styled.div`
    min-width: 200px;
    height: 200px;
    padding: 8px;
    border: 1px solid black;
`

