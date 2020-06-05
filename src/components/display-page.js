import React, { useState } from 'react';
import ReplyCreator from '../components/reply-creator';
import Reply from './reply';
import ThreadEdit from './thread-edit';

export default function DisplayPage({
    thread,
    addReply,
    replies,
    loggedIn,
    removeReply,
    onEdit,
    removeThread,
    onThredit,
}) {
    const [open, setOpen] = useState(false);
    const deleteReply = (replyID) => {
        removeReply({ threadID: thread.threadID, replyID });
    };

    const deleteThread = () => {
        removeThread({ threadID: thread.threadID });
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

                    <div className="author-t">by: {thread.email}</div>

                    {(loggedIn.email == thread.email || loggedIn.admin) && (
                        <ThreadEdit
                            threadID={thread.threadID}
                            canEdit={
                                loggedIn.email === thread.email ||
                                loggedIn.admin
                            }
                            removeThread={deleteThread}
                            threadContent={thread.content}
                            onThredit={(newContent) => {
                                onThredit({
                                    threadID: thread.threadID,
                                    content: newContent,
                                });
                            }}
                        />
                    )}

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
                                    canEdit={
                                        loggedIn.email === reply.email ||
                                        loggedIn.admin
                                    }
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
