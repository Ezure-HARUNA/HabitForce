import { firestore } from 'firebase/app'
import { useState, useMemo } from 'react'

export const useCreateFinishedTodo = () => {
  const [loading, setLoading] = useState(false)

  const createFinishedTodo = async () => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()
  
    const resFinishedTodo = firestore().collection('todoList').doc('finishedTodo').get

    //追加
    const docId = firestore().collection('todoList').doc().id
    const result = await resTodo.get()

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
    await firestore().collection('todoList').add({
      // docId: docId,
    //   createdAt: now,
      // updatedAt: now,
      goals,
      categories,
      rewards,
      ottlineList,
    // test:'test'
    // text,
    // purpose: purpose,
    // rewards: rewards,
    // category: category,
    // outlines: outlines,
    // thisWeekRewards: thisWeekRewards,
    })


    setLoading(false)
    return result.data()
  }

  return [createFinishedTodo, loading]
}
