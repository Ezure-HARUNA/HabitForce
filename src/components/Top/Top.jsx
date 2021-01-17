import React, { useContext, useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './Card'
import Detail from './Detail';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled, {createGlobalStyle} from 'styled-components';
import Button from '@material-ui/core/Button';
import reducer from '../../reducers/nextToWeek'
// import AppContext from '../../contexts/AppContext'
import { FOLLOW_TO_TASK_THIS_WEEK } from '../../actions/actions'
import { TodoContext } from '../App';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Todo from './Todo'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #F2F2F2;
  }
`;



// const DivWeb= styled.div`
//   .timer-disc-container {
//     display: flex!important;
//   }
// `
const WebCard=styled(Card)`
  width: 40%!important;
`

const WebDetail=styled(Detail)`
  width: 40%!important;
`

const SPCard=styled(Card)`
  width: 80%!important;
`

const SPDetail=styled(Detail)`
  width: 80%!important;
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
  appBarSpacer: theme.mixins.toolbar,
}));


const Top = (props) => {
  const todoContext = useContext(TodoContext)

  const [state, dispatch] = useReducer(reducer, [])
  const classes = useStyles();
  const theme = useTheme();
  const isWeb=useMediaQuery(theme.breakpoints.up('md'));

  // const handleId= (e)=>{
  //   //e.preventDefault()
  //   props.setId(props.id)
  // }
    const nextToPage1= (e)=>{
        //e.preventDefault()
        props.setId(props.id)

    }
    const [task, setTask] = useState('');
    const [week, setWeek] = useState([]);
    const [category, setCategory] = useState('');
    const [stackTime, setStackTime] = useState(0)//defaultValue

    return (
      <React.Fragment>
        <GlobalStyle/>
          <Container maxWidth="lg" >
            <Grid container spacing={3}>
              {/* {props.wants.map((want) => (
                <Card  want={want} createWant={props.createWant}/>
              ))} */}
              <Paper >
                {/* {props.wants.map((want) => (
                  <Detail want={props.want} createWant={props.createWant}/>
                ))} */}
              </Paper>
              <Paper>
                {/* {todoContext.isLoading ?  */}
                  {/* <Typography>loading</Typography> */}
                {/* : */}
                  <Container>
                  {/* todoListという変数とdeleteTodoという関数をpropsとしてTodoコンポーネントに渡している*/}
                    <Container>
                      <Typography>未完了</Typography>
                      <Todo type="todo"/>
                    </Container>
                    <Container>
                      <Typography>完了済み</Typography>
                      <Todo type="done"/>
                    </Container>
                  </Container>
                {/* // } */}
              </Paper>
            </Grid>
            <Box pt={4}>
              <Copyright />
            </Box>
          </Container>  
      </React.Fragment>
      
    )
}

export default Top



