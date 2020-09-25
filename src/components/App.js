import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
// import About from '../components/About'
import Top from './Top.jsx';
import Wanttodo from './Wanttodo'
import Calendar from './Calendar';
import Pomodoro from './Pomodoro.jsx';
import Rewards from './Rewards.jsx';
import MainItems from '../Layout/MainItems';
import SecondItems from '../Layout/SecondItems';
const App = () => {
  
  const [id, setId] =React.useState("")
  return (
    <BrowserRouter>
          <Route exact path='/' render={() => <Top id={id} setId={setId}></Top>}></Route>
          <Route path='/wanttodo' render={(props) => <Wanttodo id={id} setId={setId}></Wanttodo>}></Route>
          <Route path='/calendar' render={(props) => <Calendar ></Calendar>}></Route>
          <Route path='/pomodoro' render={(props) => <Pomodoro ></Pomodoro>}></Route>
          <Route path='/rewards' render={(props) => <Rewards ></Rewards>}></Route>
          <Route path='/mainitems' render={(props) => <MainItems id={id} setId={setId}></MainItems>}></Route>
          <Route path='/seconditems' render={(props) => <SecondItems id={id} setId={setId}></SecondItems>}></Route>
          
          {/* <ul>
            <Route path='/list' render={(props) => <List></List>}></Route>
          </ul> */}
      </BrowserRouter>
         
  )
}



export default App



