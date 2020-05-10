import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import '../firststyle.css';
import DisplayPage, { ThisMatters } from '../components/display-page';
import ThreadCreator from '../components/thread-creator';

export default function FrontPage({}) {
    const [threads, setThreads] = useState({ count: 0, threads: [] });
    /*useEffect(() => {
        console.log('running use effect');
        const getData = async () => {
            const x = await fetch(
                'http://data.nba.net/prod/v1/20191025/scoreboard.json',
                {
                    method: 'GET',
                    headers: { 'Access-Control-Allow-Origin': '*' },
                },
            );
        };
        getData();
    }, []);*/

    console.log('rendering');
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
        </div>
    );
}
