import { firestore } from 'firebase/app'
import { useState, useMemo } from 'react'

export const useCreateTodo = () => {
  const [loading, setLoading] = useState(false)
  const [todoList, setTodoList] = useState([])
  const createTodo = async ({ goals, categories, rewards, outlines, isComplete}) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()
  
    const resTodo = firestore().collection('todoList').doc('todo')
    const result = await resTodo.get()

    //追加
    const docId = firestore().collection('todoList').doc().id
    // console.log(result.data())
    console.log(docId)
    console.log(now)


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
      goals,
      categories,
      rewards,
      outlines: [], 
      isComplete: false,
      // times
    // test:'test'
    // text,
    // purpose: purpose,
    // rewards: rewards,
    // category: category,
    // outlines: outlines,
    // thisWeekRewards: thisWeekRewards,
    })

    console.log("引数", { docId: docId,
        //   createdAt: now,
          updatedAt: now,
          goals: goals,
          outlines: outlines,
          categories,
          rewards,
          isComplete
          // times
        })
    setLoading(false)
    return result.data()
  }

  return [createTodo, loading]
}
