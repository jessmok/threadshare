import React, { useState } from 'react';
import ReplyCreator from '../components/reply-creator';

export default function DisplayPage({ thread, addReply, replies, loggedIn }) {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div
                onClick={() => {
                    setOpen(!open);
                }}
            >
                {thread && thread.title}
            </div>
            {open && (
                <>
                    <div>{thread && thread.content}</div>

                    {replies &&
                        replies.map((reply) => {
                            return (
                                <div key={reply.replyID}>{reply.content}</div>
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
