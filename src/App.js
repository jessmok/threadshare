import React, { useState } from 'react';
import './App.css';
import DisplayPage, { ThisMatters } from './components/display-page';
import FrontPage from './main-pages/front-page';

function App() {
    return (
        <div className="App">
            <FrontPage />
        </div>
    );
}

export default App;
