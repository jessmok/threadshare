import React, { useState } from 'react';

const firebaseApp = window.firebaseApp;
const signIn = ({ email, password, onSignIn }) => {
    firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((creds) => onSignIn(creds))
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
        });
};

const signUp = ({ email, password, onSignIn }) => {
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }
    firebaseApp
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((creds) => onSignIn(creds))
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
        });
};

export default function Login({ onSignIn }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <div>
            <div className="mdl-cell mdl-cell--12-col mdl-cell--12-col-tablet mdl-grid">
                <h1 className="mdl-card__title-text">Welcome!</h1>
                <p>
                    Enter an email and password below and either sign in to an
                    existing account or sign up
                </p>
                <input
                    className="mdl-textfield__input"
                    style={{ display: 'inline' }}
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    onChange={({ target }) => {
                        setEmail(target.value);
                    }}
                    value={email}
                />
                &nbsp;&nbsp;&nbsp;
                <input
                    className="mdl-textfield__input"
                    style={{ display: 'inline' }}
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    onChange={({ target }) => {
                        setPassword(target.value);
                    }}
                    value={password}
                />
                <br />
                <br />
                <button
                    className="mdl-button mdl-js-button mdl-button--raised"
                    id="quickstart-sign-in"
                    name="signin"
                    onClick={() => {
                        signIn({ email, password, onSignIn });
                    }}
                >
                    Sign In
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                    className="mdl-button mdl-js-button mdl-button--raised"
                    id="quickstart-sign-up"
                    name="signup"
                    onClick={() => {
                        signUp({ email, password, onSignIn });
                    }}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}
