import React from 'react'
import { Container, Button, Paper } from '@material-ui/core' 
import { useCreateCommit } from '../../helpers/useCreateCommit'
import ContributionGraph from './ContributionGraph'
import styled from 'styled-components'
import { firestore } from 'firebase/app';
import firebase from 'firebase'; 

const StyledContainer = styled(Container)`
  display: flex!important;
`
const StyledPaper = styled(Paper)`
  width: 80%!important;
  margin: 0 auto!important;
  margin-top: 12px!important;
`

const Card = ({habit}) => {
  const [createCommit, loading] = useCreateCommit();
  const now = firebase.firestore.Timestamp.now()
  const handleClick = () => {
    createCommit({date: now,  })
  }

  return (
    <div>
       <StyledPaper>
        <StyledContainer>
            <h2>{habit.todo}</h2>
            <Button
              onClick={handleClick}
            >
              Commit</Button>
        </StyledContainer>
        <ContributionGraph/>
      </StyledPaper>
      
      
    </div>
  )
}

export default Card
