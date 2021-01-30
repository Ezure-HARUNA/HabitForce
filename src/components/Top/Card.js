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
  width: 85%!important;
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

  const handleClick = () => {
    setOpen(true);

  };

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

    return (
        <React.Fragment>
            <StyledTypography className="category-container"　component="h1" variant="h6" color="inherit"  noWrap >
              {card.categories}
            </StyledTypography>
                <StyledPaper m={5} p={5}>
                  <StyledTypography className="category-container"　component="h1" variant="h6" color="inherit"  noWrap >
                    {card.goals}
                  </StyledTypography>
                  <StyledContainer>
                  {/* {outlines.map((outline) => (
                    <Outline key={outline.id} outline={outline}/>
                  ))} */}
                  <form className={classes.container} noValidate>
                    <TextField
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
                      <Button onClick={handleClick}>完了</Button>
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
                
                </StyledPaper>
        </React.Fragment>
    )
}

export default Card;