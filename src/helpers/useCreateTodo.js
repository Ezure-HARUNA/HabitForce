import { firestore } from 'firebase/app'
import { useState, useContext } from 'react'
import { TodoContext } from '../components/App';

export const useCreateTodo = () => {
  const [loading, setLoading] = useState(false)
  const [todoList, setTodoList] = useState([])
  const todoContext = useContext(TodoContext)
  const createTodo = async ({  categories, rewards, calendar}) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()
  
    const resTodo = firestore().collection('todoList').doc('todo')
    const result = await resTodo.get()

    //追加
    const docId = firestore().collection('todoList').doc().id

    // const date = new Date().toLocaleDateString();

    // const count = todoContext.calendarCounts;
   
    // console.log(todoContext.calendarCounts)


    // const wantRef = useMemo(() => {
    //   const col = db.collection('want').doc()
  
    //   col.where('uid', '==', currentUser.uid).onSnapshot(query => {
    //     const data = []
    //     query.forEach(d => data.push({ ...d.data(), docId: d.id }))
    //     setWant(data)
    //   })
  
    //   return col
    // }, [])

    //コメントアウト
    // wantRef.where('uid', '==', currentUser.uid).onSnapshot(query => {
    //   const data = []
    //   query.forEach(d => data.push({ ...d.data(), docId: d.id }))
    //   setWant(data)
    // })
    //データを追加
    const retTodo = await firestore().collection('todoList').doc('todo').set({
      docId: docId,
    //   createdAt: now,
      updatedAt: now,
      // goals,
      categories,
      rewards,
      // outlines: [{time: 10, title: 'title'}], 
      // isComplete: false,
      // calendar: [{date: date, count: count}],
    })

    console.log("引数", { docId: docId,
        //   createdAt: now,
          updatedAt: now,
          // goals: goals,
          // outlines,
          // date,
          // count,
          categories,
          rewards,
          // isComplete,
          calendar
          // times
        })
    setLoading(false)
    return result.data()
  }

  return [createTodo, loading]
}
