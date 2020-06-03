import React, { useState } from 'react';

export default function Refresh({ onRefresh }) {
    return <button onClick={onRefresh}>REFRESH</button>;
}
