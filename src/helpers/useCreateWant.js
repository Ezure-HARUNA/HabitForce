// import { firestore } from 'firebase/app'
// import { useState, useMemo } from 'react'

// export const useCreateWant = () => {
//   const [loading, setLoading] = useState(false)
//   const [want, setWant] = useState([]);
//   const [currentUser, setCurrentUser] = useState(null)

//   const createWant = async () => {
//     if (loading) return

//     setLoading(true)

//     const now = firestore.Timestamp.now()
  
//     const resTodo = firestore().collection('todoList').doc('todo').get

//     //追加
//     const docId = firestore().collection('todoList').doc().id
  

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
//     await firestore().collection('todoList').add({
//     docId: docId,
//     //   createdAt: now,
//       updatedAt: now,
//     // test:'test'
//     text: "text",
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
