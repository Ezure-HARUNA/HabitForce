import { firestore } from 'firebase/app'
import { useState, useContext } from 'react'
import { TodoContext } from '../components/Context';

export const useCreateTodo = () => {
  const [loading, setLoading] = useState(false)
  const [todoList, setTodoList] = useState([])
  const todoContext = useContext(TodoContext)
  const createTodo = async ({ updatedAt, todo}) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()
  
    const resTodo = firestore().collection('habits')
    const result = await resTodo.get()

    //追加
    const docId = firestore().collection('habits').doc().id

    const date = new Date().toLocaleDateString();

    const count = todoContext.calendarCounts;
   
    console.log(todoContext.calendarCounts)


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
    await firestore().collection('habits').doc(docId).add({
      docId: docId,
      //   createdAt: now,
        updatedAt: now,
      // test:'test'
      todo,
      // purpose: purpose,
      // rewards: rewards,
      // category: category,
      // outlines: outlines,
      // thisWeekRewards: thisWeekRewards,
      })

    console.log("引数", { 
        //   createdAt: now,
          updatedAt: now,
          docId,
          todo
          // isComplete,
          // calendar
          // times
        })
    setLoading(false)
    return result.data()
  }

  return [createTodo, loading]
}
