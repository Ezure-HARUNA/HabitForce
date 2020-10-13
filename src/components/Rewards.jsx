import React from 'react'
import {createStyles, makeStyles} from "@material-ui/core/styles";
import present from '../image/present.png'
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import Detail from '../components/Rewards/Detail'

const useStyle = makeStyles(() => 
  createStyles({
    background: {
      backgroundImage: `url(${present})` ,
      backgroundSize: "cover",
      height: "100vh",
      opacity: 1,//0.3
    },
    
    paper: {
      position: "relative",
      marginLeft: "auto",
      marginRight: "auto",
      top: "33%",
      width: "70%",
      height: "40%",
      opacity: 1,
    },
    inputbase: {
      width: "80%",
    },
    
  }),
)

const Rewards = (props) => {
  const classes = useStyle();
  return (
    
      <div className={classes.background}>
        <Paper className={classes.paper}>
          <Detail id={props.id} setId={props.setId}/>
        </Paper>
      </div>
    
  )
}

export default Rewards
