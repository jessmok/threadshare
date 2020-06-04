import React, { useState } from 'react';

export default function Refresh({ onRefresh }) {
    return (
        <button id="refresh-button" onClick={onRefresh}>
            REFRESH
        </button>
    );
}
