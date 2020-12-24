import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components'

const StyledButton = styled(Button)`
 background-color: #ff8e53!important;
 
 ${({coral}) => coral ? css`
     background-color:#a9a9a9!important;
 ` : ''}
`


const StyledButtonGroup = styled(ButtonGroup)`
background-color: #ff8e53!important;
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
    const [coral, setCoral] = useState(false)
    const classes = useStyles();

    const [toggle,setToggle] = React.useState(false);
    const toggleIt =()=>{
    setToggle(!toggle)
  }

//   const[isWeek, setIsWeek]=React.useState(false)
//   const handleIsWeek = () => {
//     if (isWeek) {
//       setIsWeek(false)

//     } else {
//       setIsWeek(true)
//     }
//   }
//   let isAddWeek
//   if (isWeek) {
//     isAddWeek="休"

//  } else {
//  　 isAddWeek="月"

// }

  return (
    <div className={classes.root}>
      <StyledButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
        <StyledButton 
          coral={coral}
            onClick={() => setCoral(!coral)}
        >月
        </StyledButton>
        <StyledButton 
          coral={coral}
            onClick={() => setCoral(!coral)}
        >火
        </StyledButton>
        <StyledButton 
          coral={coral}
            onClick={() => setCoral(!coral)}
        >水
        </StyledButton>
        <StyledButton 
          coral={coral}
            onClick={() => setCoral(!coral)}
        >木
        </StyledButton>
        <StyledButton 
          coral={coral}
            onClick={() => setCoral(!coral)}
        >金
        </StyledButton>
        <StyledButton 
          coral={coral}
            onClick={() => setCoral(!coral)}
        >土
        </StyledButton>
        <StyledButton 
          coral={coral}
            onClick={() => setCoral(!coral)}
        >日
        </StyledButton>
      </StyledButtonGroup>
    </div>
  );
}