import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../Layout/Header';
import Card from './WantFolder/Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Detail from './WantFolder/Detail';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import clsx from 'clsx';

const drawerWidth = 240;

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
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
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
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
  // drawerPaper: {
  //   position: 'relative',
  //   whiteSpace: 'nowrap',
  //   width: drawerWidth,
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // },
  // drawerPaperClose: {
  //   overflowX: 'hidden',
  //   transition: theme.transitions.create('width', {
  //     easing: theme.transitions.easing.sharp,
  //     duration: theme.transitions.duration.leavingScreen,
  //   }),
  //   width: theme.spacing(7),
  //   [theme.breakpoints.up('sm')]: {
  //     width: theme.spacing(9),
  //   },
  // },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  
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
    margin-top: -500px!important;
  }
  .router-container {
    margin: 50px 60px 50px;

  }
`

const StyledPaper = styled(Paper)`
  margin: 10px;
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
            <Header></Header>
            <StyledContainer className="router-container">
              <h2>Top画面だよ</h2>
              <Link className="link" onClick={(e)=>{handleId()}} to='/wanttodo'>
                やりたいことリスト画面へ
              </Link>
            </StyledContainer>
            {/* <StyledContainer className="main-container">
              <Grid container spacing={3}>
                <Card />
              </Grid>
              <StyledContainer className="sub-container">
                <StyledPaper >
                  <Detail />
                </StyledPaper>
              </StyledContainer>
            </StyledContainer> */}
            <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={6} lg={6}>
              <Card />
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={6} lg={6}>
              <Paper className={fixedHeightPaper}>
                <Detail />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper >
                <Detail />
              </Paper>
            </Grid> */}
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