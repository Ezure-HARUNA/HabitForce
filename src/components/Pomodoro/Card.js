import React, { useState, useEffect, useRef } from 'react';
import Work from './Work';
import Break from './Break';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
// import Title from './Title';
import { spacing } from '@material-ui/system';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import FinishDialog from './FinishDialog';

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
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom'

import styled from 'styled-components'

const StyledContainer=styled(Container)`
  .big-container {
    margin: 50px 60px 50px!important;
  }
  /* },
  .small-container {
    margin-bottom: 16px;
  } */
    `
const StyledTypography=styled(Typography)`
    margin: 12px;
`

const StyledPaper = styled(Paper)`
  width: 100%!important;
  margin-top: 16px!important;
  padding: 30px!important;
  text-align: center!important;
  display: table;
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
      '& > *': {
        margin: theme.spacing(1),
      },
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
    formControl: {
      margin: theme.spacing(1),
      minWidth: 200,
      maxWidth: 500,
    },
    chips: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 2,
    },
    noLabel: {
      marginTop: theme.spacing(3),
    },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '瞑想',
  '軽い運動',
  '水分補給',
  '音楽を聴く'
];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Card = (props) => {
  const theme = useTheme();
  const classes = useStyles(); 
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [breakTime, setBreakTime] = React.useState([]);

 
  // checkbox 
  const [state, setState] = React.useState({
  checkedA: true,
  checkedB: true,
  checkedF: true,
  checkedG: true,
});

const handleChange = (event) => {
  setState({ ...state, [event.target.name]: event.target.checked });
};

//タイマー

  const [workLength, setWorkLength] = useState(25);
  const [breakLength, setBreakLength] = useState(5);
  const [timerLabel, setTimerLabel] = useState('やること（反映させる）');
  const [secondsLeft, setSecondsLeft] = useState(25 * 60);
  const [timerRunning, setTimerRunning] = useState(false);
  const myAudio = useRef();
  const context = new AudioContext();


  const incrementWork = () => {
    if (!timerRunning && workLength < 60){
      setWorkLength(workLength + 1)
      setSecondsLeft((workLength + 1) * 60);
    }
  }
  const decrementWork = () => {
    if (!timerRunning && workLength > 1) {
      setWorkLength(workLength - 1)
      setSecondsLeft((workLength - 1) * 60);
    }
  }

  const incrementBreak = () => {
    if (!timerRunning && breakLength < 60){
      setBreakLength(breakLength + 1)
    }
  }
  const decrementBreak = () => {
    if (!timerRunning && breakLength > 1) {
      setBreakLength(breakLength - 1)
    }
  }

  let minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;

  useEffect(() => {
    const handleSwitch = () => {
        if (timerLabel === 'やること（反映させる）') {
            setTimerLabel('休憩（反映させる）');
            setSecondsLeft(breakLength * 60);
        } else if (timerLabel === '休憩（反映させる）') {
            setTimerLabel('やること（反映させる）');
            setSecondsLeft(workLength * 60);
        }
    }

    let countdown = null;
    //一秒ごとにカウントダウン
    if (timerRunning && secondsLeft > 0) {
        countdown = setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);
    } else if (timerRunning && secondsLeft === 0) {
        countdown = setInterval(() => {
            setSecondsLeft(secondsLeft - 1);
        }, 1000);
        myAudio.current.play();
        handleSwitch();
    } else {
        clearInterval(countdown);
    }
    return () => clearInterval(countdown);
},
[timerRunning, secondsLeft, timerLabel, breakLength, workLength, myAudio]);

const handleStart = () => {
  //カウントダウン
  context.resume();
  setTimerRunning(true);
}

const handleStop = () => {
  setTimerRunning(false);
}

const handleReset = () => {
  setWorkLength(25);
  setBreakLength(5);
  setSecondsLeft(25 * 60);
  setTimerLabel('Work');
  setTimerRunning(false);
  myAudio.current.pause();
  myAudio.current.currentTime = 0;
}

const handleId = (e) => {
  e.preventDefault();
  props.setId(props.id)
}
    return (
        <React.Fragment>
          <StyledContainer className="big-container">
            {/* <Grid item xs={12} md={12} lg={6} container spacing={3}> */}
              
              <StyledContainer className="small-container">
                <StyledPaper m={5} p={5}>
                {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                  やること
                </StyledTypography> */}
                {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                {/* 　{todayTask} 反映部分 */}
                {/* </StyledTypography>  */}
    
                <Work
                  workLength={workLength}
                  incrementWork={incrementWork}
                  decrementWork={decrementWork}
                />
                </StyledPaper>
              </StyledContainer>

              <StyledContainer className="small-container">
                <StyledPaper m={5} p={5}>
                {/* <StyledTypography component="h1" variant="h6" color="inherit" noWrap >
                  5:00
                </StyledTypography> */}

                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-mutiple-name-label">休憩中やること</InputLabel>
                  <Select
                    labelId="demo-mutiple-name-label"
                    id="demo-mutiple-name"
                    multiple
                    value={breakTime}
                    onChange={handleChange}
                    input={<Input />}
                    MenuProps={MenuProps}
                  >
                    {names.map((name) => (
                      <MenuItem key={name} value={name} style={getStyles(name, breakTime, theme)}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Break
                  breakLength={breakLength}
                  incrementBreak={incrementBreak}
                  decrementBreak={decrementBreak}
                />
                </StyledPaper>
              </StyledContainer>
            {/* </Grid> */}
          </StyledContainer>
          <div className='timer-container'>
          <h2 id='timer-label'>{timerLabel}</h2>
          <h3 id='time-left'>
              {minutes < 10 ? ("0" + minutes).slice(-2) : minutes}:{seconds < 10 ? ("0" + seconds).slice(-2) : seconds}
          </h3>
          
          <Button 
            onClick={timerRunning ? handleStop : handleStart}
            variant="contained" color="primary"
          >
            Start/Stop
          </Button>
          
          <Button
            onClick={handleReset}
            variant="contained" color="primary" id="reset"
          >
            Reset
          </Button>
          {/* <Link  onClick={(e)=>{handleId(e)}} to='/pomodoro'>
            <Button
              variant="contained" color="primary" id="reset"
            >
              FINISH
            </Button>
          </Link> */}
          <FinishDialog/>

         
          
      </div>
      <audio
          id='beep'
          ref={myAudio}
          // src={soundfile}
          type='audio'
      ></audio>
        </React.Fragment>
    )
}

export default Card;