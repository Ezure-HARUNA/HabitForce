import React, { useState, useContext, createContext } from 'react';
// import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Input, Button } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
// import Pomodoro from './Pomodoro'
import TimeLimit from './TimeLimit'
import Week from './Week'
// import AppContext from "../../contexts/AppContext"
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
// import AppContext from '../contexts/AppContext'
import { TaskContext } from '../Want/Card';
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

const FirstTypography = styled(Typography)`
  margin-top: 12px!important;
`

const StyledTypography = styled(Typography)`
  margin-top: 0px;
`
const StyledTextField=styled(TextField)`
  width: 80%;
`

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
// const StyledLink = styled(Link)`
// text-decoration: none;
// margin-left: 60%!important;
// margin-bottom: 5%!important
// `

const StyledButton =styled(Button)`
  margin-left: 2.1%;
  background-color: #ff8e53!important;
  font-weight: bold;
  height: 50px!important;
  border-radius: 25px!important;
`

const ThisWeekCard = (props) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [textThisWeekTask, setTextThisWeekTask] = useState('');
  const [outlines, setOutlines] = useState([])
  console.log(outlines)
  const { register, handleSubmit, errors } = useForm();
  const classes = useStyles();
 
  // const []
  const taskContext  = useContext(TaskContext)
  const myContext = useContext(MyContext)
  const ThisWeekContext = createContext();
  /* const nextToPage1= (e)=>{
    //e.preventDefault()
    props.setId(props.id)

} */

const handleChangeThisWeekTask = (e) => {
  setTextThisWeekTask({value: e.target.value})
  myContext.setThisWeekTask(e.target.value)
} 

// const handleChangeOutline = (e) => {
//   setOutlines[0]({value: e.target.value})
  
// } 
  
// const outlineList=thisWeekContext.outlines.map((outline, id) =>{
//   return (
//      <OutlineList/>
//   )
//   })

// const { add } = useContext(TodosContext)
const [input, setInput] = useState('')

  // const addOutline = useCallback(
  //   () => {
  //     // add(input)
  //     thisWeekContext.setOutlines('')
  //   },
  //   [outline]
  // )
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
              <FirstTypography component="h1" variant="h6" color="inherit" noWrap >
                今週の目標
              </FirstTypography>

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
                いつやる
              </StyledTypography> */}
              
              {/* <Week className={classes.week}/> */}

              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                ご褒美
              </StyledTypography>

              <form className={classes.root} noValidate autoComplete="off">
                <StyledTextField id="standard-basic" label="rewards" />
              </form>
              {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                カテゴリー
              </StyledTypography>
              <StyledTypography component="h1" variant="h6" color="inherit"  noWrap >
                {myContext.category}
              </StyledTypography> */}
              {/* <StyledTypography component="h1" variant="h6" color="inherit"  noWrap >
                制限時間
              </StyledTypography>

              
              <TimeLimit className={classes.root}/> */}


              {/* <StyledLink className="link" to='/top'>  */}
                <StyledButton
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    size="large"
                    startIcon={<ForwardOutlinedIcon />}
                    onClick={handleClickOpen}
                  >
                    編集完了(TOPへ)
                  </StyledButton>
                  <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            他の目標も追加しますか？
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            はい
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            いいえ
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            キャンセル
          </Button>
        </DialogActions>
      </Dialog>
              {/* </StyledLink>  */}


          </Container>
          </ThisWeekContext.Provider>
    )
}

export default ThisWeekCard