import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import '../firststyle.css';
import DisplayPage, { ThisMatters } from '../components/display-page';
import ThreadCreator from '../components/thread-creator';
import ReplyCreator from '../components/reply-creator';

export default function FrontPage({}) {
    const [threads, setThreads] = useState({ count: 0, threads: [] });
    return (
        <div>
            <h1>LATEST THREADS</h1>
            {threads.threads.map((t) => {
                return <DisplayPage thread={t} key={t.title} />;
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

            <ReplyCreator
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
