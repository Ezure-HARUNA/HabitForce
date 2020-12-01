import React, {useState, createContext, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function TimeLimit(props) {
  const [stackTime, setStackTime] = useState('')
  const classes = useStyles();
  const TimeContext = createContext()
  const handleChange = (e) => {
    props.setStackTime(e.target.value)
  }
  
  useEffect(() => {
    return () => {
      
      console.log(stackTime) //setStackTimeは非同期関数なので遅い？
    };
  }, [stackTime])

  return (
    <TimeContext.Provider 
        value={{
          stackTime, setStackTime
        }}>
      
    <form className={classes.container} noValidate>
      <TextField
        id="time"
        label=""
        type="time"
        defaultValue={stackTime}
        onChange={handleChange}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, // 5 min
        }}
      />
    </form>
    </TimeContext.Provider>
  );
}