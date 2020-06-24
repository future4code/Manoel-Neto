import styled from 'styled-components'

export const TripsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
`
export const TripsLogo = styled.div`
    margin: 32px;
    align-self: center;
    height: auto;
`

export const GridContainer = styled.div`
    flex: 1;
    display: ${props => props.length ? 'flex' : 'grid'};
    grid-auto-flow: auto;
    gap: 16px;
    margin: 0 32px;
    padding: 16px 0;

    @media (min-device-Width: 1201px) {
        grid-template-columns: repeat(4, 1fr);
        justify-content: ${props => props.length ? 'center' : ''};
        align-items: ${props => props.length ? 'center' : ''};
    }

    @media (min-device-Width: 801px) and (max-device-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        justify-content: ${props => props.length ? 'center' : ''};
        align-items: ${props => props.length ? 'center' : ''};
    }
    @media (min-device-width: 421px) and (max-device-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: ${props => props.length ? 'center' : ''};
        align-items: ${props => props.length ? 'center' : ''};
    }

    @media (min-device-width: 320px) and (max-device-width: 420px) {
        grid-template-columns: repeat(1, 1fr);
        justify-content: ${props => props.length ? 'center' : ''};
        align-items: ${props => props.length ? 'center' : ''};
    }
`

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-width: 200px;
    height: 200px;
    padding: 16px;
    border-radius: 5px;
    background: white;
    box-shadow: 2px 2px 5px #557a95;
    transform: scale(1.0);
        transition: transform 500ms linear;

    :hover {
        transform: scale(1.03);
        transition: transform 500ms linear;
    }
`

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    margin: 16px 32px;
`
