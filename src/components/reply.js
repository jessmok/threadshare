import React, { useState } from 'react';
import ReplyCreator from './reply-creator';

export default function Reply({ reply, email, removeReply, onEdit, canEdit }) {
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

            <div className="edit-delete">
                <div className="author">by: {reply.email}</div>
                {canEdit && (
                    <>
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
                    </>
                )}
            </div>
        </div>
    );
}
