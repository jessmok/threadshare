import React, { useState } from 'react';

export default function ReplyCreator({
    onSubmit,
    isEdit,
    existingContent,
    onCancel,
}) {
    const [rContent, setRContent] = useState(existingContent || '');
    const [open, setOpen] = useState(false);

    return open || isEdit ? (
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
                            if (isEdit) {
                                onCancel();
                            }
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
                        if (onCancel) {
                            onCancel();
                        }
                    }}
                >
                    CANCEL
                </button>
            </div>
        </div>
    ) : (
        <button
            id="post-reply"
            onClick={() => {
                setOpen(true);
            }}
        >
            POST REPLY
        </button>
    );
}
