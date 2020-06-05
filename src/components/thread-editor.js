import React, { useState } from 'react';

export default function ThreadEditor({
    onSubmit,
    isEdit,
    existingContent,
    onCancel,
}) {
    const [rContent, setRContent] = useState(existingContent || '');
    const [open, setOpen] = useState(false);

    return open || isEdit ? (
        <div className="thredit-container">
            <textarea
                id="thredit-content"
                placeholder="Thread Content"
                rows="15"
                cols="75"
                value={rContent}
                onChange={(e) => {
                    setRContent(e.target.value);
                }}
            />

            <div>
                <button
                    id="thredit-submit"
                    onClick={() => {
                        if (rContent.trim()) {
                            onSubmit({ content: rContent.trim() });
                            setRContent('');
                            setOpen(false);
                            if (isEdit) {
                                onCancel();
                            }
                        } else {
                            alert('Error: no thread content detected.');
                        }
                    }}
                >
                    SUBMIT
                </button>
                <button
                    id="thredit-cancel"
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
