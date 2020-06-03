import React, { useState } from 'react';

export default function ReplyCreator({ onSubmit }) {
    const [rContent, setRContent] = useState('');
    const [open, setOpen] = useState(false);

    return open ? (
        <div className="reply-container">
            <textarea
                id="reply-content"
                placeholder="Reply Content"
                rows="10"
                cols="50"
                value={rContent}
                onChange={(e) => {
                    setRContent(e.target.value);
                }}
            />

            <div>
                <button
                    id="reply-submit"
                    onClick={() => {
                        if (rContent.trim()) {
                            onSubmit({ content: rContent.trim() });
                            setRContent('');
                            setOpen(false);
                        }
                    }}
                >
                    SUBMIT
                </button>
                <button
                    id="reply-cancel"
                    onClick={() => {
                        setOpen(false);
                        setRContent('');
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
            POST REPLY
        </button>
    );
}
