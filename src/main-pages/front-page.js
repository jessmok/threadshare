import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import '../firststyle.css';
import DisplayPage, { ThisMatters } from '../components/display-page';
import ThreadCreator from '../components/thread-creator';
import ReplyCreator from '../components/reply-creator';

export default function FrontPage({}) {
    const [threads, setThreads] = useState({
        count: 1,
        threads: [
            { title: 'Fake MF', content: 'Fuck the Knicks.', replies: [] },
        ],
    });
    console.log(threads);

    const addReply = ({ index, reply }) => {
        console.log('Reply log:', index, reply);
        threads.threads
            .filter((thread) => {
                return index === thread.title;
            })
            .pop()
            .replies.push(reply);
    };

    return (
        <div>
            <h1>LATEST THREADS</h1>
            {threads.threads.map((t) => {
                return (
                    <DisplayPage
                        thread={t}
                        key={t.title}
                        addReply={addReply}
                        replies={t.replies}
                    />
                );
            })}
            <ThreadCreator
                onSubmit={(newThread) => {
                    console.log('Submitted', newThread);
                    setThreads({
                        count: threads.count + 1,
                        threads: [...threads.threads, newThread],
                    });
                }}
            />
        </div>
    );
}