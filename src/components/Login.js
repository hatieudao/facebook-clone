import { Button } from '@material-ui/core'
import React from 'react'

import '../styles/Login.css'

import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';
function Login() {
    const [state, dispatch] = useStateValue();
    const sigIn = () => {
        //....
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch(e => alert(e.message));
    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" alt="fb-icon" />
                <img src="https://cdn.worldvectorlogo.com/logos/facebook-5.svg" alt="fb-name-icon" />
            </div>
            <Button type="submit" onClick={sigIn}>
                Sigin
            </Button>
        </div>
    )
}

export default Login
