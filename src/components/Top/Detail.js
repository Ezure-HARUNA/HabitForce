import React, { useState, useReducer, useContext } from 'react';
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

// import AppContext from '../../contexts/AppContext'
import { FOLLOW_TO_TASK_THIS_WEEK } from '../../actions/actions'
import reducer from '../../reducers/nextToWeek'
import { MyContext } from '../App';
import  ThisWeekContext  from '../ThisWeek/Detail'


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

// const StyledPaper =styled(Paper)`
//   color: blue;
// `

const StyledTypography = styled(Typography)`
  margin-top: 16px;
`

const StyledTypography2 = styled(Typography)`
  margin-left: 32px;
`
const StyledTextField=styled(TextField)`
  width: 80%;
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
  const myContext = useContext(MyContext)
  const thisWeekContext = useContext(ThisWeekContext)
  

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
              やりたいこと
            </StyledTypography>
            <StyledTypography2 component="h1" variant="h6" color="inherit" noWrap >
              {/* {thisWeekContext.outlines[0]} */}
            </StyledTypography2>
            <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
              今週の目標
            </StyledTypography>
            <StyledTypography2 component="h1" variant="h6" color="inherit" noWrap >
              {myContext.thisWeekTask}
            </StyledTypography2>
            <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
            今週の目標
            </StyledTypography>
            <StyledTypography2 component="h1" variant="h6" color="inherit" noWrap >
              {/* {thisWeekTasks} */}反映部分
            </StyledTypography2>
            <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
              元の目標
            </StyledTypography>
            <StyledTypography2 component="h1" variant="h6" color="inherit" noWrap >
              {myContext.wantTodo}
            </StyledTypography2>
            <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
              元の目標の詳細
            </StyledTypography>
            <StyledTypography2 component="h1" variant="h6" color="inherit" noWrap >
              {myContext.description}
            </StyledTypography2>
            <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
              元の目的
            </StyledTypography>
            <StyledTypography2 component="h1" variant="h6" color="inherit" noWrap >
              {myContext.purpose}
            </StyledTypography2>
            <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
              ポモドーロ機能
            </StyledTypography>
            <Pomodoro/>
            
          </Container>
        </React.Fragment>
    )
}

export default Detail