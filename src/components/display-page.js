import React, { useState } from 'react';
import ReplyCreator from '../components/reply-creator';

export default function DisplayPage({ thread, addReply, replies, loggedIn }) {
    const [open, setOpen] = useState(false);

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
                                <div
                                    className="reply-content"
                                    key={reply.replyID}
                                >
                                    {reply.content}
                                </div>
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
