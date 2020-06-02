import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import '../firststyle.css';
import DisplayPage, { ThisMatters } from '../components/display-page';
import ThreadCreator from '../components/thread-creator';
import ReplyCreator from '../components/reply-creator';
import Login from '../components/login';
const firebaseApp = window.firebaseApp;
export default function FrontPage({}) {
    const [threads, setThreads] = useState({
        count: 0,
        threads: [],
    });

    const [loggedIn, setLoggedIn] = useState(false);

    const signIn = ({ user }) => {
        const { email, uid } = user;
        setLoggedIn({ email, uid });
    };

    const addReply = ({ index, reply }) => {
        threads.threads
            .filter((thread) => {
                return index === thread.title;
            })
            .pop()
            .replies.push(reply);
    };

    return (
        <div>
            {!loggedIn ? (
                <Login onSignIn={signIn} />
            ) : (
                <>
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
                            setThreads({
                                count: threads.count + 1,
                                threads: [...threads.threads, newThread],
                            });
                        }}
                    />
                </>
            )}
        </div>
    );
}
