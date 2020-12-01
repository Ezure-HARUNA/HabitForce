import React, { useContext, useCallback, createContext } from 'react';
import Card from './Card'
import Detail from './Detail'
import {Paper, Grid, Box, Container, Typography} from '@material-ui/core';
import { Link } from 'react-router-dom';
import styled, {createGlobalStyle} from 'styled-components';
import { makeStyles } from '@material-ui/styles';

import { AuthContext } from '../Todos/contexts/auth'
import {db } from '../../App'

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

const StyledPaper = styled(Paper)`
  margin: 10px;
  height: 90vh!important;
  overflow:visible;
`

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  paper: {
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },

}));

const ThisWeek = (props) => {
  // const { state, dispatch } = useContext(AppContext);
  // const stack = stack.id
  const classes = useStyles();

  const col = db.collection('todos')
const OutlineContext = createContext()
const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([])
  const  currentUser  = useContext(AuthContext)
  console.log(currentUser)
  console.log(currentUser.uid)
  const collection = useMemo(() => {
    const col = db.collection('todos')
    // // 更新イベント監視
    col.where('uid', '==', currentUser.uid).onSnapshot(query => {
      const data = []
      query.forEach(d => data.push({ ...d.data(), docId: d.id }))
      setTodos(data)
    })

    col.where('uid', '==', currentUser.uid)
    .onSnapshot(function(querySnapshot) {
        const data = [];
        querySnapshot.forEach(d => data.push({ ...d.data(), docId: d.id }))
        setTodos(data)
    });

    return col
  }, [])

  const add = useCallback(async text => {
    try {
      await collection.add(
        uid: currentUser.uid,
        text,
        isComplete: false,
        createdAt: new Date(),
        outline,
      })
    } catch (e) {
      console.log(e)
    }
  }, [])


    return (
      <OutlineContext.Provider value={{todos, add}}>
      <GlobalStyle/>
        <Container maxWidth="lg" >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={6}>
              <Card />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <Paper >
                <Detail id={props.id} setId={props.setId}/>
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>  
    </OutlineContext.Provider>
    )
}

export default ThisWeek