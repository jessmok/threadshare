import React, { useState } from 'react';

const firebaseApp = window.firebaseApp;

const signOut = ({ onSignOut }) => {
    firebaseApp.auth().signOut();
    onSignOut();
};

export default function Logout({ onSignOut }) {
    return (
        <div>
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
