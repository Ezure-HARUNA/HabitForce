// ./src/helpers/useCreateThread.js

import { firestore } from 'firebase/app'
import { useState } from 'react'
import firebase from 'firebase';

export const useCreateCommit = () => {
  const [loading, setLoading] = useState(false)
  const [ commit, setCommit] = useState([])
  const [ test , setTest ] = useState([])

  const createCommit = async ({ todo, date, count, commits, test }) => {
    if (loading) return

    setLoading(true)

    const now = firebase.firestore.Timestamp.now()

    const habitId = firebase.firestore().collection('habits').id

    const commitRef = firebase.firestore().collection('habits').doc(habitId).collection('commits').doc()

    // await habitRef.update({
    //   // responseCount: firestore.FieldValue.increment(1),
    //   updatedAt: now,
    // })

    // const commitRef = habitRef.collection('commits').doc()

    //! const commits = setCommit.push({date: now, count: 1})

    await commitRef.update({
      // createdAt: now,
      // updatedAt: now,
      // todo,
      habitId: habitId,
      // commits: commit.push({date: now, count: 1}),
      commits: [1, 2, 3],
      test: test.push('aaaaa')
    })

    console.log("引数", { 
      //   createdAt: now,
        updatedAt: now,
        commits,
        todo,
        habitId,
        test,
        // isComplete,
        // calendar
        // times
      })

    setLoading(false)
  }

  return [createCommit, loading]
}