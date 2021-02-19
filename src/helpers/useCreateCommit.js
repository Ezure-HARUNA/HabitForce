// ./src/helpers/useCreateThread.js

import { firestore } from 'firebase/app'
import { useState } from 'react'
import firebase from 'firebase';

export const useCreateCommit = () => {
  const [loading, setLoading] = useState(false)
  const [ commit, setCommit] = useState([])
  const [ test , setTest ] = useState([])

  const createCommit = async ({ todo, date, count, commits, test, hoge, array }) => {
    if (loading) return

    setLoading(true)

    const now = firebase.firestore.Timestamp.now()

    // const habitId = firebase.firestore().collection('habits').id

    // 引数にする
    //collection指定 doc指定
    //collectionをget
    //createCommitに引数を持たせてidを
    // !const habitId = "PudxEQFgUcMeB8Z55HiQ"

    // !const commitRef = firebase.firestore().collection('habits').doc(habitId).collection('commits').doc("5sM8MOEU3RCoWpEu0SwM")

    // await habitRef.update({
    //   // responseCount: firestore.FieldValue.increment(1),
    //   updatedAt: now,
    // })

    // const commitRef = habitRef.collection('commits').doc()

    //! const commits = setCommit.push({date: now, count: 1})

    const habitId = firebase.firestore().collection('habits').doc().id

    const habitRef = firebase.firestore().collection('habits').doc(habitId)
    console.log(habitId)

    await habitRef.update({
      // createdAt: now,
      // updatedAt: now,
      // todo,
      // commits: commit.push({date: now, count: 1}),
      commits: commit.push('aaaa'),
      // commits,
      // test: test.push('aaaaa')
      hoge: "hoge",
      array: [1,2,3]
    })

    console.log("引数", { 
      //   createdAt: now,
        updatedAt: now,
        commits,
        todo,
        hoge,
        array
        // isComplete,
        // calendar
        // times
      })

    setLoading(false)
  }

  return [createCommit, loading]
}