import styled from 'styled-components'

export const GridContainer = styled.div`
    flex: 1;
    display: ${props => props.length ? 'flex' : 'grid'};
    grid-auto-flow: auto;
    gap: 16px;
    margin: 0 32px;
    padding: 16px 0;

    @media (min-width: 1201px) {
        grid-template-columns: repeat(4, 1fr);
        justify-content: ${props => props.length ? 'center' : ''};
        align-items: ${props => props.length ? 'center' : ''};
    }

    @media (min-width: 801px) and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        justify-content: ${props => props.length ? 'center' : ''};
        align-items: ${props => props.length ? 'center' : ''};
    }
    @media (min-width: 421px) and (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
        justify-content: ${props => props.length ? 'center' : ''};
        align-items: ${props => props.length ? 'center' : ''};
    }

    @media (min-width: 320px) and (max-width: 420px) {
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