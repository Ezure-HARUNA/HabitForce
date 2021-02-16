import React, { useState } from 'react'
import { Container, Button, Paper } from '@material-ui/core' 
import { useCreateCommit } from '../../helpers/useCreateCommit'
import ContributionGraph from './ContributionGraph'
import styled from 'styled-components'
import { firestore } from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore'
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
  const [createCommit] = useCreateCommit();
  const now = firebase.firestore.Timestamp.now()
  const [commits, setCommits] = useState([])

  const query = firebase.firestore().collection('habits').orderBy('updatedAt', 'desc')
  const [habits = [], loading] = useCollectionData(query, { idField: 'id' })
  const handleClick = ({habitId}) => {
    //idが必要
    //idを渡す？
    //commit
    createCommit({commits: commits.push({date: now, count: 1})})
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

        {habits.map((habit) => (
            <ContributionGraph key={habit.id} habit={habit}/>
          ))}
      </StyledPaper>
      
      
    </div>
  )
}

export default Card
