// ./src/helpers/useCreateThread.js
import React from 'react'
import { firestore } from 'firebase/app'
import { useState } from 'react'

export const useGetWant = () => {
  const [loading, setLoading] = useState(false)

  const getWant = async (id) => {
    if (loading) return

    setLoading(true)

    const now = firestore.Timestamp.now()

    //!➀スレッドを追加する
    const wantRef = firestore().collection('want').doc()
    const docId = firestore().collection('want').doc().id
    const result = await wantRef.get()
    console.log(result.data())



    //レスポンスを追加する
    // const Ref = threadRef.collection('responses').doc()

    // //!➁データを追加
    await wantRef.set({
      docId: docId,
      createdAt: now,
      updatedAt: now,
      threadId: wantRef.id,
      username: "name",
      text: "text",
    })

    setLoading(false)
    
    return result.data()
  }

  

  return [getWant, loading]
}
