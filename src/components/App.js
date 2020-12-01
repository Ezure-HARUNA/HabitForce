import React, {createContext, useState} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import About from '../components/About'
import Top from '../components/Top/Top';
import Header from '../Layout/Header'
import Want from './Want/Want'
import Calendar from './Calendar';
import Pomodoro from '../components/Pomodoro/Pomodoro.jsx';
import Rewards from './Rewards.jsx';
import MainItems from '../Layout/MainItems';
import SecondItems from '../Layout/SecondItems';
import ThisWeek from './ThisWeek/ThisWeek';
import SignIn from '../components/SignIn'
import Stack from '../components/Stack/Stack.jsx'
import firebase from 'firebase';
import "firebase/auth";
import {firebaseConfig} from '../firebase/config.jsx'
import Todos from "./Todos/Todos"
import {AuthProvider} from './Todos/contexts/auth.jsx'  




export const MyContext = createContext();

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore()
// console.log(firebase.firestore())


const App = () => {
  
  const [id, setId] =React.useState("")

  // やりたいことリストの番号
  // const [taskId, setTaskId] =React.useState("")
  const [wantTodo, setWantTodo] = React.useState("")
  const [description, setDescription] = React.useState("")
  const [purpose, setPurpose] = React.useState("")
  const [rewards, setRewards] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [thisWeekTask, setThisWeekTask] = React.useState("")
　


  return (
    <AuthProvider>
      <MyContext.Provider 
        value={{
          wantTodo, setWantTodo, 
          description, setDescription,
          purpose, setPurpose,
          rewards, setRewards,
          category, setCategory,
          thisWeekTask, setThisWeekTask

        }}>
      
      <BrowserRouter>
            <Header id={id} setId={setId}/>
            <Route exact path='/' render={() => <SignIn id={id} setId={setId}></SignIn>}></Route>
            <Route path='/todos' render={(props) => <Todos id={id} setId={setId}></Todos>}></Route>
            <Route path='/top' render={(props) => <Top id={id} setId={setId}></Top>}></Route>
            <Route path='/want' render={(props) => <Want id={id} setId={setId}></Want>}></Route>
            <Route path='/calendar' render={(props) => <Calendar ></Calendar>}></Route>
            <Route path='/pomodoro' render={(props) => <Pomodoro id={id} setId={setId}></Pomodoro>}></Route>
            <Route path='/rewards' render={(props) => <Rewards ></Rewards>}></Route>
            <Route path='/mainitems' render={(props) => <MainItems id={id} setId={setId}></MainItems>}></Route>
            <Route path='/seconditems' render={(props) => <SecondItems id={id} setId={setId}></SecondItems>}></Route>
            {/* <Route path='/header' render={(props) => <Header id={id} setId={setId}></Header>}></Route> */}
            <Route path='/thisweek' render={(props) => <ThisWeek id={id} setId={setId}></ThisWeek>}></Route>
            <Route path='/stack' render={(props) => <Stack id={id} setId={setId}></Stack>}></Route>
            
            {/* <ul>
              <Route path='/list' render={(props) => <List></List>}></Route>
            </ul> */}
        </BrowserRouter>
      </MyContext.Provider>
    </AuthProvider>
    
         
  )
}

export default App



