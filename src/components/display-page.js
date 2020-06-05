import React, { useState } from 'react';
import ReplyCreator from '../components/reply-creator';
import Reply from './reply';

export default function DisplayPage({
    thread,
    addReply,
    replies,
    loggedIn,
    removeReply,
    onEdit,
}) {
    const [open, setOpen] = useState(false);
    const deleteReply = (replyID) => {
        removeReply({ threadID: thread.threadID, replyID });
    };

    return (
        <div className="thread-container">
            <div
                className="thread-title"
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {thread && thread.title}
            </div>
            {open && (
                <>
                    <div className="thread-content">
                        {thread && thread.content}
                    </div>

                    {replies &&
                        replies.map((reply) => {
                            return (
                                <Reply
                                    key={reply.replyID}
                                    reply={reply}
                                    email={loggedIn.email}
                                    removeReply={deleteReply}
                                    onEdit={(content) => {
                                        onEdit({
                                            threadID: thread.threadID,
                                            replyID: reply.replyID,
                                            content,
                                        });
                                    }}
                                />
                            );
                        })}

                    {loggedIn && (
                        <ReplyCreator
                            onSubmit={(newReply) => {
                                addReply({
                                    threadID: thread.threadID,
                                    reply: newReply,
                                });
                            }}
                        />
                    )}
                </>
            )}
        </div>
    );
}
