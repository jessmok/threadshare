import React, { useState } from 'react';

const firebaseApp = window.firebaseApp;

const signOut = ({ onSignOut }) => {
    firebaseApp.auth().signOut();
    onSignOut();
};

export default function Logout({ onSignOut, email }) {
    return (
        <div>
            <h4>Welcome, {email}!</h4>
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
