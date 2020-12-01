import React, { useState, useContext, createContext } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import Container from '@material-ui/core/Container';

import styled from 'styled-components'
import { MyContext } from '../../components/App';

const StyledFormControlLabel=styled(FormControlLabel)`
  margin: 16px!important;
`

const StyledPaper = styled(Paper)`
  width: 100%!important;
  margin-top: 16px!important;
`
const StyledTooltip=styled(Tooltip)`
    display: block!important;
    margin-top: 30px!important;
    margin: 0 auto;
`

const Card = () => {

  const [time , setTime] = useState(0)
  const theme = useTheme();
  const myContext = useContext(MyContext)

  const TimeContext = createContext()

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
    return (
      <TimeContext.Provider value={{time}}>
          <Container >
            
              <Container>
                <StyledPaper m={5} p={5}>
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        color="primary"
                      />
                    }
                      label={myContext.wantTodo}
                  />
                </StyledPaper>
              </Container>
              <Container >
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
              </Container>
            
            <Container className="tooltip-container">
              <StyledTooltip title="Add" aria-label="add" m={10}>
                <Fab color="primary" >
                  <AddIcon />
                </Fab>
              </StyledTooltip>
            </Container>
          </Container>
        </TimeContext.Provider>
    )
}

export default Card;