import React, { useState } from 'react';
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
// import Title from './Title';
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
  const theme = useTheme();
  const classes = useStyles(); 
  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

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
        <React.Fragment>
          <StyledContainer className="big-container">
          
            <Grid item xs={12} md={12} lg={6} container spacing={3}>
              <StyledContainer className="small-container">
                <StyledPaper m={5} p={5}>
                  <StyledFormControlLabel
                    control={
                      <Checkbox
                        checked={state.checkedB}
                        onChange={handleChange}
                        name="checkedB"
                        color="primary"
                      />
                    }
                      label="筋トレ30分"
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