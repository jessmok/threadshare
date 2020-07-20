import React, { useState } from 'react';

const firebaseApp = window.firebaseApp;

const signOut = ({ onSignOut }) => {
    firebaseApp.auth().signOut();
    onSignOut();
};

export default function Logout({ onSignOut, email }) {
    return (
        <div>
            <h1>Welcome, {email}!</h1>
            <button
                onClick={() => {
                    signOut({ onSignOut });
                }}
            >
                Sign Out
            </button>
        </div>
    );
}
