import React, { useState } from 'react'
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { spacing } from '@material-ui/system';

// +
import Typography from '@material-ui/core/Typography';
// +

// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';

import styled from 'styled-components'
import { MyContext } from '../../components/App';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Card from './Card'
import ContributionGraph from './ContributionGraph'
import Text from './Text'
import StackHeader from '../../Layout/StackHeader'
<<<<<<< HEAD
import { firestore } from 'firebase/app'
=======
import { firestore } from 'firebase/app';
>>>>>>> c24dee576154e3cd08c919bc0fa8c1de0e83afc8
import { useCollectionData } from 'react-firebase-hooks/firestore'

const StyledTextPaper = styled(Paper)`
  width: 90%!important;
  margin: 0 auto!important;
`

const StyledContributionGraphPaper = styled(Paper)`
width: 90%!important;
margin: 0 auto!important;
`

const UntilNowStack = () => {

<<<<<<< HEAD
  const query = firestore().collection('todoList').doc('todo').collection('commitList').doc('commits').orderBy('updatedAt', 'desc');
  const [commits = [], loading] = useCollectionData(query, { docId: 'id' })
=======
    const query = firestore().collection('todoList').orderBy('updatedAt', 'desc')
    const [todoList = [], loading] = useCollectionData(query, { docId: 'id' })
 
  const commitsData = [
  {id: 1, content: ''},
  {id: 2, content: ''},
  {id: 3, content: ''}
]
const [commits, setCommits] = useState(commitsData)
>>>>>>> c24dee576154e3cd08c919bc0fa8c1de0e83afc8

    return (
        <div>
            <StackHeader/>
            
                <StyledContributionGraphPaper>
                    <ContributionGraph/>
                </StyledContributionGraphPaper>
<<<<<<< HEAD
               
                
            </Container>
            <Container>
                 {commits.map((commit) => (
                    <Text key={commit.id} commit={commit}/>
                  ))}
            </Container>
            </StyledContainer>
=======
                     
                <StyledTextPaper>
                {todoList.map((commit) => (
                    <Text key={commit.id} commit={commit}/>
                ))}
                </StyledTextPaper>
>>>>>>> c24dee576154e3cd08c919bc0fa8c1de0e83afc8
        </div>
    )
}

export default UntilNowStack
