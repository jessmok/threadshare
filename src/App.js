import React, { useState } from 'react';
import './css/App.css';
import DisplayPage, { ThisMatters } from './components/display-page';
import FrontPage from './main-pages/front-page';

function App() {
    return (
        <div className="App">
            <br></br>
            <FrontPage />
        </div>
    );
}

export default App;
