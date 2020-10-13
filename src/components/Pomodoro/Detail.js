import React, { useState, useReducer } from 'react';
import Pomodoro from '../Top/Pomodoro'
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
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';

import AppContext from '../../contexts/AppContext'
import { FOLLOW_TO_TASK_THIS_WEEK } from '../../actions/actions'
import reducer from '../../reducers/nextToWeek'


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
`

const StyledTooltip=styled(Tooltip)`
    display: block!important;
    margin-top: 30px!important;
    margin: 0 auto;
    `
const StyledTextField=styled(TextField)`
width: 80%;
`

// const StyledPaper =styled(Paper)`
//   color: blue;
// `

const StyledTypography = styled(Typography)`
  margin-top: 16px;
`

const StyledTypography2 = styled(Typography)`
  margin-left: 32px;
`

const StylesTextField=styled(TextField)`
  width: 40%;
`

const Detail = ({props, stack}) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, [])
  const [task, setTask] = useState('');
  const [week, setWeek] = useState([]);
  const [category, setCategory] = useState('');

  const nextToPage1= (e)=>{
    //e.preventDefault()
    props.setId(props.id)

    dispatch({
      type: 'FOLLOW_TO_TASK_THIS_WEEK',
      task,
      week,
      category
    })
}
    return (
        <React.Fragment>
          <Container>
          
            <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
              やること
            </StyledTypography>
            <StyledTypography2 component="h1" variant="h6" color="inherit" noWrap >
              {/* {todayTask} */}反映部分
            </StyledTypography2>
            <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
            アウトライン
            </StyledTypography>
            <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label={task} onChange={e => setTask(e.target.value)}></StyledTextField>
              </form>
            <StyledContainer className="tooltip-container">
              <StyledTooltip title="Add" aria-label="add" m={10}>
                <Fab color="primary" className={classes.absolute}>
                  <AddIcon />
                </Fab>
              </StyledTooltip>
            </StyledContainer>   
          </Container>
        </React.Fragment>
    )
}

export default Detail