import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/client';


const Secret = () => {
    const [session, loading] = useSession();
    const [content, setContent] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/secret");
            const json = await res.json();

            if(json.content) {
                setContent(json.content);
            }
        };

        fetchData();
    }, [session]);

    if(typeof window !== 'undefined' && loading) return null;

    if(!session) {
        return (
            <main>
                <div><span>You aren't sign in. Please sign in first.</span></div>
            </main>
        );
    }

    return (
        <main>
            <h2>Protected page</h2>
            <div><span>{content}</span></div>
        </main>
    );
};

export default Secret;
