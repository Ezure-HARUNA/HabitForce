import { firestore } from 'firebase/app'
import { useState, useContext } from 'react'
import firebase from 'firebase'; 

export const useCreateTodo = () => {
  const [loading, setLoading] = useState(false)
  const createCommit = async ({ date, count,  todo, habitId}) => {
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
      todo,
      // date,
      // count: 0,
      // purpose: purpose,
      // rewards: rewards,
      // category: category,
      // outlines: outlines,
      // thisWeekRewards: thisWeekRewards,
      })

    const commitRef = habitRef.collection('commits').doc()

    await commitRef.set({
      // updatedAt: now,
      habitId: habitRef.id,
      // todo,
      count: 0,
      // date

    })

    console.log("引数", { 
        //   createdAt: now,
          updatedAt: now,
          count,
          date,
          todo,
          habitId,
          // isComplete,
          // calendar
          // times
        })
    setLoading(false)
    // return result.data()
  }

  return [createCommit, loading]
}
