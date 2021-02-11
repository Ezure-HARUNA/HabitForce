import React, { useContext, useState, useReducer } from 'react';
import { Link } from 'react-router-dom';
import TopHeader from '../../Layout/TopHeader'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from './Card'
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styled, {createGlobalStyle} from 'styled-components';
import Button from '@material-ui/core/Button';
import reducer from '../../reducers/nextToWeek'
// import AppContext from '../../contexts/AppContext'
import { FOLLOW_TO_TASK_THIS_WEEK } from '../../actions/actions'
// import { TodoContext } from '../App';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { firestore } from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import NavBar from '../NavBar'
import Form from './Form'
import { useCreateTodo} from '../../helpers/useCreateTodo'
import { useParams } from 'react-router-dom'
import Progress from '../Progress'
import firebase from 'firebase'; 

const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #F2F2F2;
  }
`;


const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
}));


const Top = () => {
  console.log(firebase.firestore());
  const query = firebase.firestore().collection('habits').orderBy('updatedAt', 'desc')
  const [habits = [], loading] = useCollectionData(query, { idField: 'id' })


  const [createTodo] = useCreateTodo();
  console.log(firestore)

  console.log(createTodo)
  
  const classes = useStyles();
  const theme = useTheme();

    return (
      <React.Fragment>
        <GlobalStyle/>
          <Form/>
          {habits.map((habit) => (
            <Card key={habit.id} habit={habit}/>
          ))}
          {loading && <Progress />}
      </React.Fragment>
      
    )
}

export default Top



