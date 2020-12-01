import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components'

const StyledButton = styled(Button)`
  .body-color{
  background: coral;
}
`


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function Week() {
  const classes = useStyles();

  const [toggle,setToggle] = React.useState(false);
  const toggleIt =()=>{
    setToggle(!toggle)
  }

  const[isWeek, setIsWeek]=React.useState(false)
  const handleIsWeek = () => {
    if (isWeek) {
      setIsWeek(false)

    } else {
      setIsWeek(true)
    }
  }
  let isAddWeek
  if (isWeek) {
    isAddWeek="休"

 } else {
 　 isAddWeek="月"

}

  return (
    <div className={classes.root}>
      <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <StyledButton id="button_color" onClick={(e)=>{handleIsWeek(e)}}>
          <div className={isWeek&&'body-color'}>
            {isAddWeek} 
          </div>
        </StyledButton>
        <Button >火</Button>
        <Button>水</Button>
        <Button>木</Button>
        <Button>金</Button>
        <Button>土</Button>
        <Button>日</Button>
      </ButtonGroup>
    </div>
  );
}