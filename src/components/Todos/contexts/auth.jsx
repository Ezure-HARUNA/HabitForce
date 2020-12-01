import React, { createContext, useState, useCallback, useEffect } from 'react'
import  auth  from '../../App'
import firebase from 'firebase'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)

//   const signup = useCallback(async (email, password) => {
//     try {
//       setLoading(true)
//       await auth.createUserWithEmailAndPassword(email, password)
//     } catch (e) {
//       console.error(e.code, e.message)
//     }
//   }, [])

//   const signin = useCallback(async (email, password) => {
//     try {
//       setLoading(true)
//       await auth.signInWithEmailAndPassword(email, password)
//     } catch (e) {
//       console.error(e.code, e.message)
//     }
//   }, [])

//   const signout = useCallback(async () => {
//     try {
//       setLoading(true)
//       await auth.signOut()
//     } catch (e) {
//       console.error(e.code, e.message)
//     }
//   }, [])

  useEffect(() => {
    // auth.onAuthStateChanged(user => {
    //   setLoading(false)
    //   setCurrentUser(user)
    //   console.log(user)
    // })

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        console.log(user)
        console.log(firebase.auth().currentUser)
        console.log(user.uid)
        setCurrentUser(user)

      } else {
        // No user is signed in.
      }
    });
  
    

  }, [])

  return (
    
    <AuthContext.Provider
      value={{
        currentUser,
        // signup,
        // signin,
        // signout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }