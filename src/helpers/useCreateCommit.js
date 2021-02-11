// ./src/helpers/useCreateThread.js

import { firestore } from 'firebase/app'
import { useState } from 'react'
import firebase from 'firebase';

export const useCreateCommit = () => {
  const [loading, setLoading] = useState(false)
  const [ commit, setCommit] = useState([])

  const createCommit = async ({ todo, habitId, date, count  }) => {
    if (loading) return

    setLoading(true)

    const now = firebase.firestore.Timestamp.now()

    const habitRef = firebase.firestore().collection('habits').doc(habitId)

    // await habitRef.update({
    //   // responseCount: firestore.FieldValue.increment(1),
    //   updatedAt: now,
    // })

    // const commitRef = habitRef.collection('commits').doc()

    const commits = setCommit.push({date: now, count: 1})

    await habitRef.update({
      // createdAt: now,
      // updatedAt: now,
      // todo,
      commits
    })

    setLoading(false)
  }

  return [createCommit, loading]
}