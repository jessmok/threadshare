import React, { useState } from 'react';

export default function ReplyCreator({ onSubmit }) {
    const [rContent, setRContent] = useState('');

    return (
        <div className="reply-container">
            <textarea
                id="reply-content"
                placeholder="Reply Content"
                rows="10"
                cols="50"
                value={rContent}
                onChange={(e) => {
                    //console.log('e:', e.target.value);
                    setRContent(e.target.value);
                }}
            />

            <div>
                <button
                    id="reply-submit"
                    onClick={() => {
                        const RET = { rContent };
                        console.log(RET);
                        onSubmit(RET);
                        setRContent('');
                    }}
                >
                    SUBMIT
                </button>
                <button id="reply-cancel">CANCEL</button>
            </div>
        </div>
    );
}
