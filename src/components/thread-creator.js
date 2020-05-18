import React, { useState } from 'react';

export default function ThreadCreator({ onSubmit }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    //console.log(title);
    return (
        <div className="thread-container">
            <input
                id="thread-title"
                placeholder="Thread Title"
                value={title}
                onChange={(val) => {
                    //console.log('val:', val.target.value);
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
                    //console.log('e:', e.target.value);
                    setContent(e.target.value);
                }}
            />

            <div>
                <button
                    id="thread-submit"
                    onClick={() => {
                        const RET = { title, content };
                        console.log(RET);
                        onSubmit(RET);
                        setTitle('');
                        setContent('');
                    }}
                >
                    SUBMIT
                </button>
                <button id="thread-cancel">CANCEL</button>
            </div>
        </div>
    );
}
