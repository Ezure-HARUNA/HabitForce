// ./src/helpers/useCreateThread.js

import { firestore } from 'firebase/app'
import { useState } from 'react'
import firebase from 'firebase';

export const useCreateCommit = () => {
  const [loading, setLoading] = useState(false)

  const createCommit = async ({ todo, habitId, date, count  }) => {
    if (loading) return

    setLoading(true)

    const now = firebase.firestore.Timestamp.now()

    const habitRef = firebase.firestore().collection('habits').doc(habitId)

    // await habitRef.update({
    //   // responseCount: firestore.FieldValue.increment(1),
    //   updatedAt: now,
    // })

    const commitRef = habitRef.collection('commits').doc()

    await commitRef.update({
      // createdAt: now,
      // updatedAt: now,
      // todo,
      habitId,
      date: now,
      count: firebase.firestore.FieldValue.increment(1),
    })

    setLoading(false)
  }

  return [createCommit, loading]
}