// import { firestore } from 'firebase/app'
// import { useState, useMemo } from 'react'

// export const useCreateWant = () => {
//   const [loading, setLoading] = useState(false)
//   const [want, setWant] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null)

//   const createWant = async ({ text, description, purpose, rewards, category, outlines, thisWeekRewards }) => {
//     if (loading) return

//     setLoading(true)

//     const now = firestore.Timestamp.now()

   

   
//     //!➀スレッドを追加する
//     const resTodo = firestore().collection('todoList').doc(todo'')

//     //追加
//     const docId = firestore().collection('want').doc().id
//     const result = await wantRef.get()
//     console.log(result.data())
//     console.log(docId)
//     console.log(text)
//     console.log(now)

//     // const wantRef = useMemo(() => {
//     //   const col = db.collection('want').doc()
  
//     //   col.where('uid', '==', currentUser.uid).onSnapshot(query => {
//     //     const data = []
//     //     query.forEach(d => data.push({ ...d.data(), docId: d.id }))
//     //     setWant(data)
//     //   })
  
//     //   return col
//     // }, [])

//     //コメントアウト
//     // wantRef.where('uid', '==', currentUser.uid).onSnapshot(query => {
//     //   const data = []
//     //   query.forEach(d => data.push({ ...d.data(), docId: d.id }))
//     //   setWant(data)
//     // })
//     //データを追加
//     await firestore().collection('wants').add({
//     docId: docId,
//     //   createdAt: now,
//       updatedAt: now,
//     // test:'test'
//     text: "text",
//     description: description,
//     // purpose: purpose,
//     // rewards: rewards,
//     // category: category,
//     // outlines: outlines,
//     // thisWeekRewards: thisWeekRewards,
//     })


//     setLoading(false)
//     return result.data()
//   }

//   return [createWant, loading]
// }
