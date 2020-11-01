import React, { useState, useReducer, useContext, createContext } from 'react';
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

// import AppContext from '../../contexts/AppContext'
import { FOLLOW_TO_TASK_THIS_WEEK } from '../../actions/actions'
import reducer from '../../reducers/nextToWeek'
import { MyContext } from '../../components/App';
import { useForm } from "react-hook-form";
import { SentimentSatisfiedAlt } from '@material-ui/icons';


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

// const StyledContainer =styled(Container)`
//   display: flex;
//   /* justify-content: flex-end; */
// `
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

// const StylesTextField=styled(TextField)`
//   width: 40%;
// `

export const TaskContext = createContext();

const Detail = (props) => {
  
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, [])
  const [text, setText] = useState('');
  const [task, setTask] = useState('');
  const [week, setWeek] = useState([]);
  const [category, setCategory] = useState('');
  const myContext = useContext(MyContext)
  console.log(myContext.name)
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  const nextToPage1= (e)=>{
    //e.preventDefault()
    // e.target.value
    setTask(task)
    props.setId(props.id)

    dispatch({
      type: 'FOLLOW_TO_TASK_THIS_WEEK',
      task,
      week,
      category
    })
}

const handleChange = (e) => {
  setText({value: e.target.value})
} 
    return (
      <TaskContext.Provider value={{text, setText, task, setTask}}>
          <Paper>
          <form onSubmit={handleSubmit(onSubmit)}>
          <Container>
              <Container className="button-container">
                {/* <StyledButton
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  size="large"
                  startIcon={<CancelOutlinedIcon />}
                >
                  キャンセル
              </StyledButton>
              <StyledButton
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="large"
                  startIcon={<SaveOutlinedIcon />}
                >
                  保存
              </StyledButton> */}
              </Container>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                やりたいこと
              </StyledTypography>
              <TextField 
                value={myContext.text}

                name="todo"  
                label="やること" 
                onChange={handleChange}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                詳細
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="description" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                目的
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="purpose" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                いつやる
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                月　火　水　木　金　土　日
              </StyledTypography>
             
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                ご褒美
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="rewards" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                カテゴリー
              </StyledTypography>
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="category" />
              </form>

              <Link className="link" onClick={(e)=>{nextToPage1()}} to='/thisweek'>
                <StyledButton
                  variant="contained"
                  type="submit"
                  color="primary"
                  className={classes.button}
                  size="large"
                  startIcon={<ForwardOutlinedIcon />}
                >
                  次のページ（今週やること）へ
                </StyledButton>
              </Link>
          </Container>
          </form>
          </Paper>
        </TaskContext.Provider>
    )
}

export default Detail