import React, {createContext} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import About from '../components/About'
import Top from '../components/Top/Top';
import Header from '../Layout/Header'
import Wanttodo from '../components/Want/Wanttodo'
import Calendar from './Calendar';
import Pomodoro from '../components/Pomodoro/Pomodoro.jsx';
import Rewards from './Rewards.jsx';
import MainItems from '../Layout/MainItems';
import SecondItems from '../Layout/SecondItems';
import ThisWeek from './ThisWeek/ThisWeekCard';
import SignIn from '../components/SignIn'
import Stack from '../components/Stack/Stack.jsx'
import firebase from 'firebase/app';
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgg7aF92zUW1a4EWfPJXL5rTbveJFnAjA",
  authDomain: "habitforce-822c4.firebaseapp.com",
  databaseURL: "https://habitforce-822c4.firebaseio.com",
  projectId: "habitforce-822c4",
  storageBucket: "habitforce-822c4.appspot.com",
  messagingSenderId: "162943994229",
  appId: "1:162943994229:web:dfb0b1caad1db259c3ab3c",
  measurementId: "G-L2W0YBPMK7"
};



export const MyContext = createContext();
export const auth = firebase.auth()
export const db = firebase.firestore()
firebase.initializeApp(firebaseConfig);

const App = () => {
  
  const [id, setId] =React.useState("")
 

  // やりたいことリストの番号
  // const [taskId, setTaskId] =React.useState("")
  // const [wantTodo, setWantTodo] = React.useState("")
  // const [description, setDescription] = React.useState("")
  // const [purpose, setPurpose] = React.useState("")
  // const [rewards, setRewards] = React.useState("")
  // const [category, setCategory] = React.useState("")

  return (
    <MyContext.Provider value={{name: 'to-R Media'}}>
      <BrowserRouter>
            <Route exact path='/' render={() => <SignIn id={id} setId={setId}></SignIn>}></Route>
            <Route path='/top' render={(props) => <Top id={id} setId={setId}></Top>}></Route>
            <Route path='/wanttodo' render={(props) => <Wanttodo id={id} setId={setId}></Wanttodo>}></Route>
            <Route path='/calendar' render={(props) => <Calendar ></Calendar>}></Route>
            <Route path='/pomodoro' render={(props) => <Pomodoro id={id} setId={setId}></Pomodoro>}></Route>
            <Route path='/rewards' render={(props) => <Rewards ></Rewards>}></Route>
            <Route path='/mainitems' render={(props) => <MainItems id={id} setId={setId}></MainItems>}></Route>
            <Route path='/seconditems' render={(props) => <SecondItems id={id} setId={setId}></SecondItems>}></Route>
            <Route path='/header' render={(props) => <Header id={id} setId={setId}></Header>}></Route>
            <Route path='/thisweek' render={(props) => <ThisWeek id={id} setId={setId}></ThisWeek>}></Route>
            <Route path='/stack' render={(props) => <Stack id={id} setId={setId}></Stack>}></Route>
            
            {/* <ul>
              <Route path='/list' render={(props) => <List></List>}></Route>
            </ul> */}
        </BrowserRouter>
      </MyContext.Provider>
         
  )
}



export default App



