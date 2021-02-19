import { firestore } from 'firebase/app'
import { useState, useContext } from 'react'
import firebase from 'firebase'; 

export const useCreateTodo = () => {
  const [loading, setLoading] = useState(false)
  const createCommit = async ({ habit, commits, hoge, array}) => {
    if (loading) return

    setLoading(true)

    const now = firebase.firestore.Timestamp.now()
  
    const habitRef = firebase.firestore().collection('habits').doc()
    // const result = await resTodo.get()

    //追加
    // const docId = firestore().collection('habits').doc().id

    // const date = new Date().toLocaleDateString();


    //データを追加
    await habitRef.set({
      //   createdAt: now,
        updatedAt: now,
      // test:'test'
      habit,
      commits,
      hoge, 
      array,
      habitId: habitRef.id
      })

    // const commitRef = habitRef.collection('commits').doc()

    // await commitRef.set({
    //   updatedAt: now,
    //   habitId: habitRef.id,
    //   // todo,
    //   count: 0,
    //   commits,
    //   // date

    // })

    console.log("引数", { 
        //   createdAt: now,
          updatedAt: now,
          // isComplete,
          // calendar
          // times
        })
    setLoading(false)
    // return result.data()
  }

  return [createCommit, loading]
}
