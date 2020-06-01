import React, { useState } from 'react';
import ReplyCreator from '../components/reply-creator';

export default function DisplayPage({ thread, addReply, replies }) {
    const [open, setOpen] = useState(true);

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
                            return <div>{reply.content}</div>;
                        })}

                    <ReplyCreator
                        onSubmit={(newReply) => {
                            console.log(newReply);
                            addReply({
                                index: thread.title,
                                reply: newReply,
                            });
                        }}
                    />
                </>
            )}
        </div>
    );
}
