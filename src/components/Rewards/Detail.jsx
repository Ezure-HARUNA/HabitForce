import React, { useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';

import AppContext from '../../contexts/AppContext'
import { FOLLOW_TO_TASK_THIS_WEEK } from '../../actions/actions'
import reducer from '../../reducers/nextToWeek'

import CloseButton from "./CloseButton"




const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
    button: {
      margin: theme.spacing(1),
    },
  },
}));

const StyledContainer =styled(Container)`
  display: flex;
  justify-content: flex-end;
`
const StyledButton =styled(Button)`
  margin-left: 2.1%;
  text-decoration: none!important;
`

// const StyledPaper =styled(Paper)`
//   color: blue;
// `

const StyledTypography = styled(Typography)`
  margin-top: 16px;
`
const StyledTextField=styled(TextField)`
  width: 80%;
`

const StylesTextField=styled(TextField)`
  width: 40%;
`

const Detail = (props) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('');
  const [week, setWeek] = useState([]);
  const [category, setCategory] = useState('');

  const handleId= (e)=>{
    e.preventDefault()
    props.setId(props.id)

}
    return (
        <React.Fragment>
          <Container>
              <StyledContainer className="button-container">
                <Link className="link" onClick={(e)=>{handleId(e)}} to='/'>
                    <CloseButton setId={props.setId} id={props.id}/>
                </Link>
              </StyledContainer>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                １つ目標を達成しました！
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                自分にご褒美をあげましょう
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                目標
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                {/* {smallgoal} {biggoal} */}
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                ご褒美
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                {/* {smallrewards} {bigrewards} */}
              </StyledTypography>
              

              
                
              
          </Container>
        </React.Fragment>
    )
}

export default Detail