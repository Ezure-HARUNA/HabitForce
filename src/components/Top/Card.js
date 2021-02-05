import React, { useState, useContext } from 'react';
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
import TimeLimit from './TimeLimit';
import { TodoContext } from '../../components/App';
import { TimeContext } from './TimeLimit'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { CardTravel } from '@material-ui/icons';
import TextField from '@material-ui/core/TextField';
import Outline from './Outline'
import { useCreateTodo } from '../../helpers/useCreateTodo'

const StyledButton =styled(Button)`
  /* margin-left: 52.5%; */
  font-weight: bold;
  /* border-radius: 25px!important; */
  /* position: absolute!important;
  bottom: 0%!important;
  right: 0%!important; 
  z-index: 10!important;  */
  background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, .3);
`

const StyledTextField = styled(TextField)`
  width: 80%!important;
  /* display: flex !important;
  margin: 0 auto!important; */
  margin-left: 2.5% !important;
  margin-bottom: 2.5% !important;
`

const TimeTextField = styled(TextField)`
  margin-right: 60%!important;
`

const StyledContainer=styled(Container)`
  display: flex!important;
`

const StyledFormControlLabel=styled(FormControlLabel)`
  /* margin: 16px!important; */
`
const StyledTypography=styled(Typography)`
    margin: 12px!important;
`

const StyledPaper = styled(Paper)`
  width: 45%!important;
  margin: 0 auto !important;
`

const StyledTooltip=styled(Tooltip)`
    display: block!important;
    margin-top: 30px!important;
    margin: 0 auto;
    `


const theme = {
    spacing: 8,
  }

const useStyles = makeStyles((theme) => ({
    
    fixedHeight: {
        height: 120,
        // margin: 20,
      },
    root: {
    flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary,
        height: 120,
    },
    fab: {
        margin: theme.spacing(2),
      },
    tooltip: {
        spacing: 10,
    },
    container: {
    display: 'flex',
    flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 200,
    }
}));




const Card = ({card, type}) => {
  //timeの設定
  // const formatDate = (date) => isNil(date.seconds)
  //  ? date // Already a javascript date object
  //  : date.toDate()
  // console.log(want.text)
  const todoContext = useContext(TodoContext)

  
  const theme = useTheme();
  const classes = useStyles(); 
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  // checkbox 
  const [state, setState] = React.useState({
  checkedA: false,
  checkedB: false,
  checkedF: true,
  checkedG: true,
});

const [open, setOpen] = React.useState(false);

  const handleClick = (outline) => {
    setOpen(true);
    createTodo({count: todoContext.calendarCounts + 1, date: new Date(), times: todoContext.inputTimes })
    todoContext.setInputTimes('0:00')
    //cardのadd
      // outline.id = outlines.length + 1
      // outlines([...outlines, {id: outlines.length + 1, content: ''}])
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

const [todos, setTodos] = useState({id: 0, outlines: "", totalTime: 0 })

const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
};


const handleClickOpen = () => {
  setOpen(true);
};

const outlinesData = [
  {id: 1, content: ''},
  {id: 2, content: ''},
  {id: 3, content: ''}
]
const [outlines, setOutlines] = useState(outlinesData)

//
const [createTodo, loading] = useCreateTodo();

    return (
        <React.Fragment>
            <StyledTypography className="category-container"　component="h1" variant="h6" color="inherit"  noWrap >
              {card.categories}
            </StyledTypography>
                <StyledPaper m={5} p={5}>
                  {/* <StyledTypography className="category-container"　component="h1" variant="h6" color="inherit"  noWrap >
                    {card.goals}
                  </StyledTypography>
                   {outlines.map((outline) => (
                    <Outline key={outline.id} outline={outline}/>
                  ))} */}

           
            <StyledContainer>
                 
              <form className={classes.container} noValidate>
                <TimeTextField
                  id="time"
                  label=""
                  type="time"
                  defaultValue="00:00"
                  // value={
                  // form.datapedido.toDate()
                  // }
                  onChange={(e) => todoContext.setInputTimes(e.target.value)}
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </form>
              <StyledButton
                  // onClick={addTodo()}
                  onClick={handleClick}
                  variant="contained"
                  type="submit"
                  color="primary"
                  className={classes.button}
                  size="large"
                  // startIcon={<ForwardOutlinedIcon />}
                >
                  commit
                </StyledButton>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  open={open}
                  autoHideDuration={6000}
                  onClose={handleClose}
                  message="タスクを完了しました"
                  action={
                    <React.Fragment>
                      {/* <Button color="secondary" size="small" onClick={handleClose}>
                        UNDO
                      </Button> */}
                      <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    </React.Fragment>
                  }
                />  
                </StyledContainer>
                 <StyledTypography className="category-container"　component="h1" variant="h6" color="inherit"  noWrap >
                  {card.rewards}
                </StyledTypography>              
          </StyledPaper>
  </React.Fragment>
    )
}

export default Card;