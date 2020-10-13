import React, { useContext, useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../Layout/Header';
import calendar from './Card';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Detail from './Detail';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled, {createGlobalStyle} from 'styled-components';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ForwardOutlinedIcon from '@material-ui/icons/ForwardOutlined';
import reducer from '../../reducers/nextToWeek'
import AppContext from '../../contexts/AppContext'
import { FOLLOW_TO_TASK_THIS_WEEK } from '../../actions/actions'


const drawerWidth = 240;



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
  height: 100vh;
  overflow:visible;
  `


const Stack = (props) => {
  const [state, dispatch] = useReducer(reducer, [])
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const handleId= (e)=>{
    //e.preventDefault()
    props.setId(props.id)
  }
    const nextToPage1= (e)=>{
        //e.preventDefault()
        props.setId(props.id)

        dispatch({
          type: 'FOLLOW_TO_TASK_THIS_WEEK',
          task,
          week,
          category
        })
    }
    const [task, setTask] = useState('');
    const [week, setWeek] = useState([]);
    const [category, setCategory] = useState('');

    return (
            <AppContext.Provider value={{ state, dispatch}}>
              <StyledContainer className="router-container">
              　<h2>Top画面だよ</h2>
                <Link className="link" onClick={(e)=>{handleId()}} to='/wanttodo'>
                  やりたいことリスト画面へ
                </Link>
              </StyledContainer>
                <main className={classes.content}>
                  <div className={classes.appBarSpacer} />
                    <Container maxWidth="lg" className={classes.container}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} md={6} lg={6}>
                          {/* <Card /> */}
                        </Grid>
                        {/* Recent Deposits */}
                        <Grid item xs={12} md={6} lg={6}>
                          <StyledPaper className={fixedHeightPaper}>
                            <Detail id={props.id} setId={props.setId}/>
                            
                          </StyledPaper>
                        </Grid>
                      </Grid>
                      <Box pt={4}>
                        <Copyright />
                      </Box>
                    </Container>
                    </main>
                  </AppContext.Provider>
      
    )
}

export default Stack

