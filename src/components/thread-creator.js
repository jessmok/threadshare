import React, { useState } from 'react';

export default function ThreadCreator({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [open, setOpen] = useState(false);

    return open ? (
        <div className="thread-container">
            <input
                id="thread-title"
                placeholder="Thread Title"
                value={title}
                onChange={(val) => {
                    setTitle(val.target.value);
                }}
            />
            <textarea
                id="thread-content"
                placeholder="Thread Content"
                rows="20"
                cols="100"
                value={content}
                onChange={(e) => {
                    setContent(e.target.value);
                }}
            />

            <div>
                <button
                    id="thread-submit"
                    onClick={() => {
                        if (title.trim() && content.trim()) {
                            const RET = { title, content, replies: [] };
                            onSubmit(RET);
                            setTitle('');
                            setContent('');
                        }
                    }}
                >
                    SUBMIT
                </button>
                <button
                    id="thread-cancel"
                    onClick={() => {
                        setOpen(false);
                        setTitle('');
                        setContent('');
                    }}
                >
                    CANCEL
                </button>
            </div>
        </div>
    ) : (
        <button
            onClick={() => {
                setOpen(true);
            }}
        >
            CREATE THREAD
        </button>
    );
}
