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
import styled, {createGlobalStyle} from 'styled-components';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';

const drawerWidth = 240;

const StyledButton=styled(Button)`
  margin-left: 80%!important;
`

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
    background-color: #f8f8f8!important;
  }
`

const StyledPaper = styled(Paper)`
  margin: 10px;
  height: 100vh;
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
            {/* <Header></Header> */}
            <StyledContainer className="router-container">
              <h2>Top画面だよ</h2>
              <Link className="link" onClick={(e)=>{handleId()}} to='/wanttodo'>
                やりたいことリスト画面へ
              </Link>
              <StyledButton
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  size="large"
                  startIcon={<ForwardOutlinedIcon />}
                >
                  次のステップ
              </StyledButton>
            </StyledContainer>
              <main className={classes.content}>
                <div className={classes.appBarSpacer} />
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