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
import BarGraph from './BarGraph'
import ContributionGraph from './ContributionGraph'
import Text from './Text'
import StackHeader from '../../Layout/StackHeader'
import { firestore } from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const StyledCardPaper = styled(Paper)`
  width: 40%!important;
  margin-top: 16px;
`
const StyledBarGraphPaper = styled(Paper)`
width: 50%!important;
`

const StyledContributionGraphPaper = styled(Paper)`
/* width: 40%!important; */
`

const StyledContainer = styled(Container)`
display: flex!important` 

const UntilNowStack = () => {
    //outlineの追加
    const cardsData = [
    {id: 1, content: ''},
    {id: 2, content: ''},
    {id: 3, content: ''}
  ]
  const [cards, setCards] = useState(cardsData)

  const query = firestore().collection('todoList').doc('todo').collection('commitList').doc('commits').orderBy('updatedAt', 'desc');
  const [commits = [], loading] = useCollectionData(query, { docId: 'id' })

    return (
        <div>
            <StackHeader/>
            <StyledContainer className="small-container">
            <Container>
                <StyledBarGraphPaper>
                    <BarGraph/>
                </StyledBarGraphPaper>
                <StyledContributionGraphPaper>
                    <ContributionGraph/>
                </StyledContributionGraphPaper>
               
                
            </Container>
            <Container>
                 {commits.map((commit) => (
                    <Text key={commit.id} commit={commit}/>
                  ))}
            </Container>
            </StyledContainer>
        </div>
    )
}

export default UntilNowStack
