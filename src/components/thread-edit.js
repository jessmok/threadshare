import React, { useState } from 'react';
import ThreadEditor from './thread-editor';

export default function ThreadEdit({
    threadID,
    canEdit,
    removeThread,
    threadContent,
    onThredit,
}) {
    const [editing, setEditing] = useState(false);

    return (
        <div className="edit-t-container">
            <div className="edit-t-content" key={threadID}>
                {!editing ? (
                    ''
                ) : (
                    <ThreadEditor
                        isEdit
                        existingContent={threadContent}
                        onCancel={() => {
                            setEditing(false);
                        }}
                        onSubmit={({ content }) => {
                            onThredit(content);
                        }}
                    />
                )}
            </div>

            <div className="edit-delete-t">
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
                                removeThread(threadID);
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
