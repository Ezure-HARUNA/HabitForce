import React, {createContext, useState} from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import About from '../components/About'
import Top from '../components/Top/Top';
// import Header from '../Layout/Header'
import Plan from './Plan/Plan'
import Calendar from './Calendar';
import Rewards from './Rewards.jsx';
import MainItems from '../Layout/MainItems';
import SecondItems from '../Layout/SecondItems';
import SignIn from '../components/SignIn'
import ThisWeekStack from './ThisWeekStack/ThisWeekStack.jsx'
import EditPlan from '../components/EditPlan/EditPlan'
import UntilNowStack from '../components/UntilNowStack/UntilNowStack'
import Card from '../components/Top/Card'
import Detail from '../components/Top/Detail'
import firebase from 'firebase';
import "firebase/auth";
import {firebaseConfig} from '../firebase/config.jsx'
import { useCreateWant } from '../helpers/useCreateWant'
import { firestore } from 'firebase/app'
import { useCollectionData } from 'react-firebase-hooks/firestore'




export const TodoContext = createContext();

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const db = firebase.firestore()

const App = () => {
  
  const [id, setId] =React.useState("")

   const [inputRewards, setInputRewards] = useState('');
   const [inputCategories, setInputCategories] = useState('');
   const [ inputCommits, setInputCommits] = useState('')
<<<<<<< HEAD
   const [ calendarCounts, setCalendarCounts] = useState(0);
=======
   const [ calendarCounts, setCalendarCounts] = useState(1);
>>>>>>> c24dee576154e3cd08c919bc0fa8c1de0e83afc8
   const [ inputTimes, setInputTimes ] = useState('');
   const [todoList, setTodoList] = useState([]);
   const [finishedList, setFinishedList] = useState([]);
   // Loadingを判定する変数
   const [isLoading, setIsLoading] = useState(true);
   // 未完了のTodoが変化したかを監視する変数
   const [isChangedTodo, setIsChangedTodo] = useState(false);
   // 完了済みのTodoが変化したかを監視する変数
   const [isChangedFinished, setIsChangedFinished] = useState(false);


  return (
    <div id="root">
      <TodoContext.Provider 
        value={{
          inputRewards, setInputRewards,
          inputCategories, setInputCategories,
<<<<<<< HEAD
          inputCommits, setInputCommits,
=======
          
>>>>>>> c24dee576154e3cd08c919bc0fa8c1de0e83afc8
          calendarCounts, setCalendarCounts,
          inputTimes, setInputTimes,
          todoList, setTodoList,
          finishedList, setFinishedList,
          isLoading, setIsLoading, 
          isChangedTodo, setIsChangedTodo, 
          isChangedFinished, setIsChangedFinished

        }}>
      
      <BrowserRouter>
            {/* <Header id={id} setId={setId}/> */}
            <Route exact path='/' render={() => <SignIn id={id} setId={setId}></SignIn>}></Route>
            <Route path='/top' render={(props) => <Top id={id} setId={setId} ></Top>}></Route>
            <Route path='/plan' render={(props) => 
              <Plan id={id} setId={setId}
            ></Plan>}></Route>
            <Route path='/calendar' render={(props) => <Calendar ></Calendar>}></Route>
            <Route path='/rewards' render={(props) => <Rewards ></Rewards>}></Route>
            <Route path='/mainitems' render={(props) => <MainItems id={id} setId={setId}></MainItems>}></Route>
            <Route path='/seconditems' render={(props) => <SecondItems id={id} setId={setId}></SecondItems>}></Route>
            {/* <Route path='/header' render={(props) => <Header id={id} setId={setId}></Header>}></Route> */}
            <Route path='/editplan' render={(props) => <EditPlan id={id} setId={setId}></EditPlan>}></Route>
            <Route path='/thisweekstack' render={(props) => <ThisWeekStack id={id} setId={setId}></ThisWeekStack>}></Route>
            <Route path='/stack' render={(props) => <UntilNowStack id={id} setId={setId}></UntilNowStack>}></Route>
            <Route path='/topcard' render={(props) => <Card id={id} setId={setId}></Card>}></Route>
            <Route path='/topdetail' render={(props) => <Detail id={id} setId={setId} ></Detail>}></Route>
            
            {/* <ul>
              <Route path='/list' render={(props) => <List></List>}></Route>
            </ul> */}
        </BrowserRouter>
      </TodoContext.Provider>
    </div>
    
         
  )
}
export default App



