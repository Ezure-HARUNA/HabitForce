import React from 'react';
import Header from '../../Layout/Header'
import Card from './Card'
import Detail from './Detail'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled, {createGlobalStyle} from 'styled-components';
import clsx from 'clsx';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

import { makeStyles } from '@material-ui/core/styles';



const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #F2F2F2;
  }
`;

const DivWeb= styled.div`
  .timer-disc-container {
    display: flex!important;
  }
`

function Copyright() {

  return (
    // <AppContext.Provider value={{ state, dispatch}}>
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    // </AppContext.Provider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    marginTop: -100,
  
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },

}));

const StyledContainer = styled(Container)`
  .main-container {
    display: flex;
  }
  .router-container {
    margin: 50px 60px 50px;
    background-color: #f8f8f8!important;
  }
`

const StyledPaper = styled(Paper)`
  margin-top: 80px;
  overflow:visible;
  padding:10px;
  `


const Pomodoro = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const isWeb=useMediaQuery(theme.breakpoints.up('md'));

    
    return (
      <React.Fragment>
        {isWeb ? (
          <>
            <Header/>
            <GlobalStyle />
            <DivWeb className="timer-disc-container">
                <Card/>
                <Detail/>
            </DivWeb>
          </>
        ) : (//SP版
          <>
            <Header/>
            <GlobalStyle />
            <StyledContainer className="router-container">
            </StyledContainer>
            <main className={classes.content}>
              <Container maxWidth="lg" className={classes.container}>
                    <Card id={props.id} setId={props.setId}/>
                    <StyledPaper className={fixedHeightPaper}>
                      <Detail />
                    </StyledPaper>
                <Box pt={4}>
                  <Copyright />
                </Box>
              </Container>
            </main>
          </>
        )}
        </React.Fragment>
   
    )
}

export default Pomodoro