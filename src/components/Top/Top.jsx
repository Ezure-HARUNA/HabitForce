import React from 'react';
import Header from '../../Layout/Header'
import Card from '../Top/Card'
import Detail from '../Top/Detail'
import { Link } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled, {createGlobalStyle} from 'styled-components';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/core/styles';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #F2F2F2;
  }
`;

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
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  appBarSpacer: theme.mixins.toolbar,
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
  margin: 10px;
  min-height: 100vh;
  overflow:visible;
  `


const Top = (props) => {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    const handleId= (e)=>{
        //e.preventDefault()
        props.setId(props.id)
    }
    return (
        
        <div>
          <Header/>
          <GlobalStyle />
          <StyledContainer className="router-container">
          </StyledContainer>
          <main className={classes.content}>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                  <Card />
                </Grid>
                  {/* Recent Deposits */}
                <Grid item xs={12} md={6} lg={6}>
                  <StyledPaper className={fixedHeightPaper}>
                    <Detail />
                  </StyledPaper>
                </Grid>
              </Grid>
              <Box pt={4}>
                <Copyright />
              </Box>
            </Container>
          </main>
        </div>
    )
}

export default Top