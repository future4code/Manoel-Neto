import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { CandidateItem, InfoItem, SingleInfo, DecisionContainer } from './Styled'
import { CheckCircle, Cancel } from '@material-ui/icons'
import { makeDecision } from '../API/API'

export function CandidatesCard(props){

    const candidate = props.info

    const tripId = window.localStorage.getItem('tripId')

    return(
        <CandidateItem>
            <InfoItem>
                <SingleInfo>
                    {candidate.name}, {candidate.age}
                </SingleInfo>
                <SingleInfo>
                    {candidate.profession}
                </SingleInfo>
                <SingleInfo>
                    {candidate.country}
                </SingleInfo>
            </InfoItem>

            <InfoItem>
            {candidate.applicationText}
            </InfoItem>
            <InfoItem>
                <DecisionContainer>
                    <CheckCircle fontSize='large' color='secondary' onClick={() => makeDecision(tripId, candidate.id, true)} />
                    <Cancel fontSize='large' style={{ color: '#FF0000' }} onClick={() => makeDecision(tripId, candidate.id, false)} />
                </DecisionContainer>
            </InfoItem>
        </CandidateItem>
    )
}