import React, { useState } from 'react'
import { Container, Button, Paper, Snackbar } from '@material-ui/core' 
import { useCreateCommit } from '../../helpers/useCreateCommit'
import ContributionGraph from './ContributionGraph'
import TestGraph from './TestGraph'
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
  const now = new Date().toLocaleDateString();
  const [commits, setCommits] = useState([])
  // const [test, setTest] = useState([])

  const query = firebase.firestore().collection('habits').orderBy('updatedAt', 'desc')
  const [habits = [], loading] = useCollectionData(query, { idField: 'id' })

  //!snackbarの出現と、commitの処理

  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    //idが必要
    //idを渡す？
    //commit
    // createCommit({commits: commits.push({date: now, count: 1})})
    createCommit({commits})
    // setCommits.push({date: now, count: 1})
    // test.push({date: now, count: 1})
    // console.log(test)
    //! console.log(now)
     console.log(commits)
    // console.log(test)

    setState({ open: true, ...newState });

  }

  const handleClose = () => {
    setState({ ...state, open: false });
  };


  return (
    <div>
       <StyledPaper>
        <StyledContainer>
            <h2>{habit.todo}</h2>
            {/* <h3>{setTest}</h3> */}
            {/* createCommitしつつ、openする */}
            <Button
              // onClick={handleClickOpen}
              onClick={handleClick({ vertical: 'top', horizontal: 'right' })}
            >
              Commit</Button>
            {/* 以下にsnackbarを設置する */}
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              message="積み上げをcommitしました"
              key={vertical + horizontal}
            />
        </StyledContainer>

        {habits.map((habit) => (
            <TestGraph key={habit.id} habit={habit}/>
          ))}
          <ContributionGraph key={habit.id} habit={habit}/>
      </StyledPaper>
      
      
    </div>
  )
}

export default Card
