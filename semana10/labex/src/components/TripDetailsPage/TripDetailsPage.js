import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { MainContainer, Title, ButtonContainer } from '../../Styled'
import { CandidateContainer, Status } from './Styled'
import { useGetTipDetails } from '../API/API';
import { CandidatesCard } from './CandidatesCard'
import { BackButton } from '../../BackButton'
import { useParams } from 'react-router-dom';

export function TripsDetailsPage(props){

    const { tripId } = useParams()

    const trip = useGetTipDetails(tripId,[])



    console.log(trip)

    return(
        <MainContainer>
            <ButtonContainer>
                <BackButton />
            </ButtonContainer>
            <Title>
                <Typography> {trip.name}</Typography>
            </Title>
            <Status>
                    <p>Aguardando: </p>
                </Status>
            <CandidateContainer>
                {trip.candidates && trip.candidates.map(candidate => {
                    return <CandidatesCard key={candidate.id} info={candidate} />
                })}

            </CandidateContainer>
            <Status>
                <p>Aprovados: </p>
            </Status>
            <CandidateContainer>
                {trip.approved && trip.approved.map(candidate => {
                    return <CandidatesCard key={candidate.id} info={candidate} />
                })}

            </CandidateContainer>
        </MainContainer>
    )
}