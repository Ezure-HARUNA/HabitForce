import React, {createContext, useState} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import About from '../components/About'
import Top from '../components/Top/Top';
import Header from '../Layout/Header'
import Plan from './Plan/Plan'
import Calendar from './Calendar';
import Pomodoro from '../components/Pomodoro/Pomodoro.jsx';
import Rewards from './Rewards.jsx';
import MainItems from '../Layout/MainItems';
import SecondItems from '../Layout/SecondItems';
import SignIn from '../components/SignIn'
import ThisWeekStack from './ThisWeekStack/ThisWeekStack.jsx'
import EditPlan from '../components/EditPlan/EditPlan'
import UntilNowStack from '../components/UntilNowStack/UntilNowStack'
import Card from '../components/Top/Card'
import firebase from 'firebase';
import "firebase/auth";
import {firebaseConfig} from '../firebase/config.jsx'
import { useCreateWant } from '../helpers/useCreateWant'
import { firestore } from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'




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

  const query = firestore().collection('wants').orderBy('updatedAt', 'desc')
  const [wants = [], loading] = useCollectionData(query, { docId: 'id' })
  const [ createWant ] = useCreateWant()


  return (
    <div id="root">
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
            <Route path='/top' render={(props) => <Top id={id} setId={setId}></Top>}></Route>
            <Route path='/plan' render={(props) => <Plan id={id} setId={setId}></Plan>}></Route>
            <Route path='/calendar' render={(props) => <Calendar ></Calendar>}></Route>
            <Route path='/pomodoro' render={(props) => <Pomodoro id={id} setId={setId}></Pomodoro>}></Route>
            <Route path='/rewards' render={(props) => <Rewards ></Rewards>}></Route>
            <Route path='/mainitems' render={(props) => <MainItems id={id} setId={setId}></MainItems>}></Route>
            <Route path='/seconditems' render={(props) => <SecondItems id={id} setId={setId}></SecondItems>}></Route>
            {/* <Route path='/header' render={(props) => <Header id={id} setId={setId}></Header>}></Route> */}
            <Route path='/editplan' render={(props) => <EditPlan id={id} setId={setId}></EditPlan>}></Route>
            <Route path='/thisweekstack' render={(props) => <ThisWeekStack id={id} setId={setId}></ThisWeekStack>}></Route>
            <Route path='/untilnowstack' render={(props) => <UntilNowStack id={id} setId={setId}></UntilNowStack>}></Route>
            <Route path='/topcard' render={(props) => <Card id={id} setId={setId} createWant={createWant} wants={wants}></Card>}></Route>
            
            {/* <ul>
              <Route path='/list' render={(props) => <List></List>}></Route>
            </ul> */}
        </BrowserRouter>
      </MyContext.Provider>
    </div>
    
         
  )
}
export default App



