import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app';
import { Redirect, Switch, Router, Route } from 'react-router-dom';
import styled from 'styled-components'
import { GoogleLoginButton } from 'react-social-login-buttons';
import Plan from './Plan/Plan'
import useReactRouter from 'use-react-router';
import { auth } from './App'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/CircularProgress';

const SignIn = () => {

    const { history } = useReactRouter();
    const signInWithGoogle = async () => {
       
        // Googleプロバイダオブジェクトのインスタンスを作成
        const provider = new firebase.auth.GoogleAuthProvider()
        const user = await firebase.auth().signInWithPopup(provider)
          
        
        alert(  user.user.displayName + "さんでログインしました");
        history.push('/plan')

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

		const [textEmail, setTextEmail] = useState('')
		
		const  onEmailChange = email => {
			// フォームにテキストが入力されたらreduxのstoreを更新
			setTextEmail(email.target.value);
		};
    
		const googleLogin = () => {
			// Googleログイン処理
			const provider = new firebase.auth.GoogleAuthProvider();
			firebase.auth().signInWithRedirect(provider);
		};
    return (
        <div>
          <GoogleLoginButton onClick={googleLogin} align="center" iconSize={'20'} size={'40'}>
          	<span style={{ fontSize: 16 }}>Googleで{formText}</span>
        	</GoogleLoginButton>
					<div style={{ textAlign: 'center', marginTop: 20 }}>または</div>
        <form style={{ textAlign: 'center' }} noValidate autoComplete="off"
					onSubmit={(e) => e.preventDefault()}
				>
					<div>
						<TextField
							id="standard-email"
							label="メールアドレス"
							value={textEmail}
							onChange={onEmailChange}
							margin="normal"
							/>
						</div>
						<div style={{ color: '#fa755a' }}>{this.renderErrorMessage()}</div>
						{this.props.loading ? (
            <CircularProgress style={{ marginTop: 5 }} />
          ) : (
            <Button style={{ margin: 20 }} onClick={this.onButtonPress} variant="contained" color="primary">
              {this.props.formText}
            </Button>
          )}
				</form>
								{/* Google認証のみ(修正前) */}
                {/* <div className="login">
                    <h1>ログイン</h1>
                </div>
                <div className="signin_button">
                    
                    <GoogleLoginButton onClick={()=>signInWithGoogle()}  align="center" iconSize={'20'} size={'40'}/>
                </div>
                <Router history={history}>
                    <Switch>
                        <Route path="/"/>
                            <Route path="/plan" exact component={Plan} />
                    </Switch>
                </Router> */}
            </div>
        );
}

export default SignIn