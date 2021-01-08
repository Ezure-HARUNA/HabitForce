import React, { useState, useContext, createContext } from 'react';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Input, Button } from '@material-ui/core';
import 
  { Fab, Tooltip, Dialog, DialogTitle,  DialogContentText, 
    DialogContent,  DialogActions
  } 
from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import CancelOutlinedIcon from '@material-ui/icons/CancelOutlined';
import PostAddOutlinedIcon from '@material-ui/icons/PostAddOutlined';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// import AppContext from "../../contexts/AppContext"
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
// import AppContext from '../contexts/AppContext'
import { TaskContext } from './Card';
import { MyContext } from '../App';
import { useForm } from "react-hook-form";
import OutlineForm  from './OutlineForm'
import OutlineList  from './OutlineList'
 


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

const StyledTooltip=styled(Tooltip)`
    display: block!important;
    margin: 0 auto;
    margin-top: 6px!important;
    `


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
  margin-left: 180px!important;
  margin-bottom: 12px!important;
  .main-container {
    display: flex;
  }
  .router-container {
    margin: 50px 60px 50px;
    background-color: #f8f8f8!important;
  }
`
const StyledLink = styled(Link)`
text-decoration: none;
margin-left: 30%!important;
margin-bottom: 5%!important
`

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

  const [openCancel, setOpenCancel] = React.useState(false);

  const handleClickOpenCancel = () => {
    setOpenCancel(true);
  };

  const handleCloseCancel = () => {
    setOpenCancel(false);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const [textThisWeekTask, setTextThisWeekTask] = useState('');
  /* const [outlines, setOutlines] = useState([]) */
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

//outlineの追加
const outlinesData = [
  {id: 1, content: ''},
  {id: 2, content: ''},
  {id: 3, content: ''}
]
const [outlines, setOutlines] = useState(outlinesData)
const addOutline = (outline) => {
    outline.id = outlines.length + 1
    setOutlines([...outlines, {id: outlines.length + 1, content: ''}])
  }
  console.log(outlines)
    return (
      <ThisWeekContext.Provider 
      value={{
        textThisWeekTask, setTextThisWeekTask,
        outlines, setOutlines
      }}>
          <Container>
             
              <FirstTypography component="h1" variant="h6" color="inherit" noWrap >
                今週の目標
              </FirstTypography>
            
              <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                詳細なアウトライン
              </StyledTypography> 
               
                {outlines.map((outline, index) => (
                  <OutlineList outlines={outlines} setOutlines={setOutlines} index={index}
                  />
                ))}
                <OutlineForm addOutline={addOutline} outlines={outlines}/>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      disableToolbar
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Date picker inline"
                      value={selectedDate}
                      onChange={handleDateChange}
                      KeyboardButtonProps={{
                        'aria-label': 'change date',
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
            
              
            
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

              <StyledContainer>
                <StyledButton
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="large"
                  startIcon={<CancelOutlinedIcon />}
                  onClick={handleClickOpenCancel}
                >
                  キャンセル
                </StyledButton>

                <Dialog
                    openCancel={openCancel}
                    onClose={handleCloseCancel}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"この目標の作成をキャンセルしますか？"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                        
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <StyledLink className="link" to='/top'>
                        <Button  color="primary">
                          はい
                        </Button>
                      </StyledLink>
                        <Button onClick={handleCloseCancel} color="primary" autoFocus>
                          いいえ
                        </Button>
                    </DialogActions>
                  </Dialog>

                  <StyledButton
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    size="large"
                    startIcon={<PostAddOutlinedIcon />}
                    onClick={handleClickOpen}
                  >
                    目標追加
                  </StyledButton>
                  <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <DialogTitle id="alert-dialog-title">{"他の目標も新規作成しますか？"}</DialogTitle>
                    <DialogContent>
                      /* <DialogContentText id="alert-dialog-description">
                        
                      </DialogContentText> */
                    </DialogContent>
                    <DialogActions>
                      <StyledLink className="link" to='/editplan'>
                        <Button onClick={handleClose} color="primary">
                          他の目標も新規作成する
                        </Button>
                      </StyledLink>
                      <StyledLink className="link" to='/top'>
                        <Button onClick={handleClose} color="primary" autoFocus>
                          この目標だけ追加する
                        </Button>
                      </StyledLink>
                      <Button onClick={handleClose} color="primary" autoFocus>
                        キャンセル
                      </Button>
                      
                    </DialogActions>
                  </Dialog>
                  </StyledContainer>
              {/* </StyledLink>  */}


          </Container>
          </ThisWeekContext.Provider>
    )
}

export default ThisWeekCard