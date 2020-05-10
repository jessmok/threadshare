import React, { useState } from 'react';

export default function DisplayPage({ thread }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {thread && thread.title}
            </div>
            {open && <div>{thread && thread.content}</div>}
        </div>
    );
}
