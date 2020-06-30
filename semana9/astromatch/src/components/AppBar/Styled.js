import styled from 'styled-components'

export const AppBarContainer = styled.div`
	height: 50px;
	border-bottom: 1px solid lightgray;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
	padding: 10px 10px;
	flex-shrink: 0;
`
export const Logo = styled.div`
    font-family: MuseoModerno;
	height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        color: #FFFFFF;
    }
`
export const IconMatchesContainer = styled.div`
    cursor: pointer;
    transition: 0.2s;
    flex: 1;

    :hover {
        transform: scale(0.9);
    }
`

export const IconFindContainer = styled.div`
    cursor: pointer;
    transition: 0.2s;
    flex: 1;
    display: flex;
    justify-content: flex-end;

    :hover {
        transform: scale(0.9);
    }
`