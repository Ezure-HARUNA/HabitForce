import React from 'react'
import firebase from 'firebase/app';
import { Redirect, Switch, Router, Route } from 'react-router-dom';
import styled from 'styled-components'
import { GoogleLoginButton } from 'react-social-login-buttons';
import Top from './Top/Top.jsx'
import useReactRouter from 'use-react-router';
import Todos from './Todos/Todos'



const SignIn = () => {

    const { history } = useReactRouter();
    const signInWithGoogle = async () => {
       
        // Googleプロバイダ オブジェクトのインスタンスを作成
        const provider = new firebase.auth.GoogleAuthProvider()
        const user = await firebase.auth().signInWithPopup(provider)
        alert(  user.user.displayName + "さんでログインしました");
        history.push('/todos')

        // // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
        // firebase.auth().signInWithPopup(provider)
        // .then(user => {
        //     alert(  user.user.displayName + "さんでログインしました");
        //     history.push('/')
        //     // return <Redirect to={'/top'} />
        // //   })
        // .catch(user() {
        //       alert("存在するアカウントを選択してください");
        
        //   });
        
    }
    
    
    return (
            <div>
                <div className="login">
                    <h1>ログイン</h1>
                </div>
                <div className="signin_button">
                    
                    <GoogleLoginButton onClick={()=>signInWithGoogle()}  align="center" iconSize={'20'} size={'40'}/>
                </div>
                <Router history={history}>
                    <Switch>
                        <Route path="/"/>
                            <Route path="/todos" exact component={Todos} />
                    </Switch>
                </Router>
            </div>
        );
}

export default SignIn