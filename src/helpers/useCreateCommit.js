import { firestore } from 'firebase/app'
import { useState, useContext } from 'react'
import { TodoContext } from '../components/App';

export const useCreateCommit = () => {
  const [loading, setLoading] = useState(false)
  const [todoList, setTodoList] = useState([])
  const todoContext = useContext(TodoContext)
  const createCommit = async ({  updatedAt }) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()
  
    const resCommit = firestore().collection('todoList').doc('commit')
    const result = await resCommit.get()

    const commit = todoContext.inputCommits;

    const date = new Date().toLocaleDateString();

    const times = todoContext.inputTimes

    const count = todoContext.calendarCounts;

    const calendar = [{date, count}]
   
    console.log(todoContext.calendarCounts)
   
    console.log(todoContext.inputCommits)


    //データを追加
    const retCommit = await firestore().collection('todoList').doc('commit').set({
        // commit: commit,
        // calendar: [{date: date, count: count}],
        calendar,
        updatedAt: now,
        times: times
    })

    console.log("引数", { 
        commit,
        updatedAt,
        date, 
        count,
        calendar,
        times
        })
    setLoading(false)
    return result.data()
  }

  return [createCommit, loading]
}
