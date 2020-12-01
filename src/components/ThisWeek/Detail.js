import React, { useState, useContext, createContext } from 'react';
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
import Pomodoro from './Pomodoro'
import TimeLimit from './TimeLimit'
import Week from './Week'
// import AppContext from "../../contexts/AppContext"
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
// import AppContext from '../contexts/AppContext'
import { TaskContext } from '../Want/Detail';
import { MyContext } from '../../components/App';
import { useForm } from "react-hook-form";



const useStyles = makeStyles((theme) => ({
  
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      marginLeft: 32,
    },
    button: {
      margin: theme.spacing(1),
    },
    week: {
      marginLeft: -16,
    }
  },
}));

const StyledContainer =styled(Container)`
  display: flex;
  .main-container {
    display: flex;
  }
  .router-container {
    margin: 50px 60px 50px;
    background-color: #f8f8f8!important;
  }
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
const StyledTextField=styled(TextField)`
  width: 80%;
`

const StylesTextField=styled(TextField)`
  width: 40%;
`

const ThisWeekCard = (props) => {
  const [textThisWeekTask, setTextThisWeekTask] = useState('');
  const [outlines, setOutlines] = useState([])
  console.log(outlines)
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
 
  // const []
  const taskContext  = useContext(TaskContext)
  const myContext = useContext(MyContext)
  const ThisWeekContext = createContext();
  const nextToPage1= (e)=>{
    //e.preventDefault()
    props.setId(props.id)

}

const handleChangeThisWeekTask = (e) => {
  setTextThisWeekTask({value: e.target.value})
  myContext.setThisWeekTask(e.target.value)
} 

// const handleChangeOutline = (e) => {
//   setOutlines[0]({value: e.target.value})
  
// } 
  
const outlineList=thisWeekContext.outlines.map((outline, id) =>{
  return (
     <OutlineList/>
  )
  })

// const { add } = useContext(TodosContext)
// const [input, setInput] = useState('')

  const addOutline = useCallback(
    () => {
      // add(input)
      thisWeekContext.setOutlines('')
    },
    [outline]
  )
    return (
      <ThisWeekContext.Provider 
      value={{
        textThisWeekTask, setTextThisWeekTask,
        outlines, setOutlines
      }}>
          <Container>
              <StyledContainer className="button-container">
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
              </StyledContainer>
              <h2>今週やること</h2>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                タスク
              </StyledTypography>
              

              <TextField 
                value={ThisWeekContext.thisWeekTask}

                name="todo"  
                label="this week task" 
                onChange={handleChangeThisWeekTask}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              
              {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                詳細なアウトライン
              </StyledTypography> */}
              {/* <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="詳細なアウトライン" />
              </form> */}
              

              {/* <Ul>
                {outlineList}
              </Ul> */}

              <Input
                id="add-outline"
                label="outline"
                placeholder="Enter new outline"
                value={input}
                onChange={e => setInput(e.target.value)}
                fullWidth
              />
              <Button color="primary" onClick={addOutline}>
                Add
              </Button>


              <TextField 
                // value={ThisWeekContext.outlines[0]}

                name="todo"  
                label="outline" 
                // onChange={handleChangeOutline}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              <TextField 
                // value={ThisWeekContext.outlines[0]}

                name="todo"  
                label="outline" 
                // onChange={handleChangeOutline}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              <TextField 
                // value={ThisWeekContext.outlines[0]}

                name="todo"  
                label="outline" 
                // onChange={handleChangeOutline}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              <TextField 
                // value={ThisWeekContext.outlines[0]}

                name="todo"  
                label="outline" 
                // onChange={handleChangeOutline}
                ref={register({required: true, maxLength: 50})} 
                type="text"
                fullWidth
                margin="normal"
                inputRef={register({ required: true, maxLength: 20 })}
                error={Boolean(errors.todo)}
                helperText={errors.todo && "やることは20文字以内にして下さい。"}
              />
              {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                ご褒美
              </StyledTypography> */}
              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="ご褒美" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                いつやる
              </StyledTypography>
              
              <Week className={classes.week}/>
              {/* <StyledContainer className="pomodoro-container"> */}
                <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                  ポモドーロ機能
                </StyledTypography>                
                <Pomodoro/>
              {/* </StyledContainer> */}

              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="rewards" />
              </form>
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                カテゴリー
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit"  noWrap >
                {myContext.category}
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit"  noWrap >
                制限時間
              </StyledTypography>

              
              <TimeLimit className={classes.root}/>
              <Link className="link" onClick={(e)=>{nextToPage1()}} to='/top'>
                <StyledButton
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    size="large"
                    startIcon={<ForwardOutlinedIcon />}
                  >
                    編集完了(TOPへ)
                  </StyledButton>
                </Link>


          </Container>
          </ThisWeekContext.Provider>
    )
}

export default ThisWeekCard