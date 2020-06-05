import React, { useState } from 'react';
import ReplyCreator from './reply-creator';

export default function Reply({ reply, email, removeReply, onEdit }) {
    const [editing, setEditing] = useState(false);

    return (
        <div className="reply-container">
            <div className="reply-content" key={reply.replyID}>
                {!editing ? (
                    `${reply.content}`
                ) : (
                    <ReplyCreator
                        isEdit
                        existingContent={reply.content}
                        onCancel={() => {
                            setEditing(false);
                        }}
                        onSubmit={({ content }) => {
                            onEdit(content);
                        }}
                    />
                )}
            </div>

            {email && email === reply.email && (
                <div className="edit-delete">
                    <button
                        onClick={() => {
                            setEditing(true);
                        }}
                    >
                        E
                    </button>
                    <button
                        onClick={() => {
                            removeReply(reply.replyID);
                        }}
                    >
                        D
                    </button>
                </div>
            )}
        </div>
    );
}
