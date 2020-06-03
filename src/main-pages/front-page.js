import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';
import '../firststyle.css';
import DisplayPage, { ThisMatters } from '../components/display-page';
import ThreadCreator from '../components/thread-creator';
import ReplyCreator from '../components/reply-creator';
import Login from '../components/login';
import Logout from '../components/logout';
import Refresh from '../components/refresh';

const firebaseApp = window.firebaseApp;
export default function FrontPage({}) {
    const [threads, setThreads] = useState([]);

    const [loggedIn, setLoggedIn] = useState(false);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const threadDisplay = await firebaseApp
                .database()
                .ref('/threads/')
                .once('value');
            const val = threadDisplay.val();
            const keys = val ? Object.keys(val) : [];
            const basedThreads = keys.map((threadKey) => {
                const RET = val[threadKey];
                const keys = RET.replies ? Object.keys(RET.replies) : [];
                const basedReplies = keys.map((replyKey) => {
                    return RET.replies[replyKey];
                });
                RET.replies = basedReplies;
                return RET;
            });
            setThreads(basedThreads);
        };
        getData();
    }, [refresh]);

    const signIn = ({ user }) => {
        const { email, uid } = user;
        setLoggedIn({ email, uid });
    };

    const signOut = () => {
        setLoggedIn(false);
    };

    const newThread = async (newThread) => {
        if (loggedIn) {
            var postsRef = firebaseApp.database().ref('threads');

            var newPostRef = postsRef.push();
            await newPostRef.set({
                content: newThread.content,
                email: loggedIn.email,
                title: newThread.title,
                threadID: newPostRef.key,
            });
            setRefresh(!refresh);
        }
    };

    const addReply = async ({ threadID, reply }) => {
        if (loggedIn) {
            var postsRef = firebaseApp
                .database()
                .ref(`threads/${threadID}/replies`);

            var newPostRef = postsRef.push();
            await newPostRef.set({
                content: reply.content,
                email: loggedIn.email,
                replyID: newPostRef.key,
            });
            setRefresh(!refresh);
        }
    };

    return (
        <div>
            {!loggedIn ? (
                <Login onSignIn={signIn} />
            ) : (
                <Logout onSignOut={signOut} />
            )}

            <h1>LATEST THREADS</h1>
            {threads && threads.length ? (
                threads.map((t) => {
                    return (
                        <DisplayPage
                            thread={t}
                            key={t.title}
                            addReply={addReply}
                            replies={t.replies}
                            loggedIn={loggedIn}
                        />
                    );
                })
            ) : (
                <div>No threads :'(</div>
            )}
            {loggedIn && <ThreadCreator onSubmit={newThread} />}

            <Refresh
                onRefresh={() => {
                    setRefresh(!refresh);
                }}
            />
        </div>
    );
}
