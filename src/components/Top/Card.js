import React, { useState, useContext } from 'react';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/style';
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
import { MyContext } from '../../components/App';
import { ThisWeekContext } from '../ThisWeek/Detail';
import { TimeContext } from './TimeLimit'
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const StyledContainer=styled(Container)`
  .big-container {
    margin: 50px 60px 50px!important;
  }
  .time-container {
    display: flex;
  }
  .category-container {
    margin-left: 30px;
  }
  /* },
  .small-container {
    margin-bottom: 16px;
  } */
    `

const StyledFormControlLabel=styled(FormControlLabel)`
  margin: 16px!important;
`
const StyledTypography=styled(Typography)`
    margin: 12px;
`

const StyledPaper = styled(Paper)`
  width: 250%!important;
  margin-top: 16px;
  height: 250px!important;
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
    }
}));

const Card = () => {
  const myContext = useContext(MyContext)
  const thisWeekContext = useContext(ThisWeekContext)
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
//   if (checked) {
//     update({
//       setTodos
//         ([...todos, 
//           {id:0,
//            outlines: {thisWeekContext.outlines[0]}, 
//            totalTime: todos[0][stackTime].push()
//           }
//         ])
    
//     })
    

// } else {
// 　 todos

// }
};




const handleClickOpen = () => {
  setOpen(true);
  // update({
  //   setTime: setTodos([ ...todos,{ id:0, title:"hoge", time }])

  // })
};
    return (
        <React.Fragment>
          <StyledContainer className="big-container">
          
            <Grid item xs={12} md={12} lg={6} container spacing={3}>
              <StyledContainer className="small-container">
                <StyledPaper m={5} p={5}>
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                      label={thisWeekContext.outlines[0]}
                  />
                  <StyledContainer className="time-container">
                    <StyledTypography component="h1" variant="h6" color="inherit"  noWrap >
                      時間:
                    </StyledTypography>
                    <TimeLimit className={classes.root}/>
                  </StyledContainer>
                    <StyledTypography className="category-container"　component="h1" variant="h6" color="inherit"  noWrap >
                      カテゴリー
                    </StyledTypography>
                    <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                      {myContext.category}
                    </StyledTypography>

                    <div>
                      <Button onClick={handleClick}>完了</Button>
                      <Snackbar
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'left',
                        }}
                        open={open}
                        autoHideDuration={6000}
                        onClose={handleClose}
                        message="Note archived"
                        action={
                          <React.Fragment>
                            <Button color="secondary" size="small" onClick={handleClose}>
                              UNDO
                            </Button>
                            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                              <CloseIcon fontSize="small" />
                            </IconButton>
                          </React.Fragment>
                        }
                      />
                    </div>
                
                </StyledPaper>
              </StyledContainer>
              <StyledContainer className="small-container">
                <StyledPaper m={5} p={1}>
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                      label="ポートフォリオ作成"
                  />
                </StyledPaper>
              </StyledContainer>
            </Grid>
            <StyledContainer className="tooltip-container">
              <StyledTooltip title="Add" aria-label="add" m={10}>
                <Fab color="primary" className={classes.absolute}>
                  <AddIcon />
                </Fab>
              </StyledTooltip>
            </StyledContainer>
          </StyledContainer>
        </React.Fragment>
    )
}

export default Card;