import { firestore } from 'firebase/app'
import { useState, useMemo } from 'react'

export const useCreateWant = () => {
  const [loading, setLoading] = useState(false)
  const [want, setWant] = useState([]);
  const [currentUser, setCurrentUser] = useState(null)

  const createWant = async ({ text, description, purpose, rewards, category }) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()

   

   
    //!➀スレッドを追加する
    const wantRef = firestore().collection('want').doc()

    //追加
    const docId = firestore().collection('want').doc().id
    const result = await wantRef.get()
    console.log(result.data())

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
    await wantRef.set({
    docId: docId,
    //   createdAt: now,
    //   updatedAt: now,
    // test:'test'
    text: text,
    description: description,
    // purpose: purpose,
    // rewards: rewards,
    // category: category,
    })

    // //レスポンスを追加する
    // const Ref = threadRef.collection('responses').doc()

    // //!➁データを追加
    // await responseRef.set({
    //   createdAt: now,
    //   updatedAt: now,
    //   threadId: threadRef.id,
    //   username,
    //   text,
    // })

    setLoading(false)
    return result.data()
  }

  return [createWant, loading]
}
