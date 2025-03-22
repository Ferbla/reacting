"use client";

import { useEffect, useState } from "react";
import { fetchDadJoke } from '../apis/DadJokesApi';

export function DadJoke() {
    const [joke, setJoke] = useState(null);

    const getJoke = async () => {
        setJoke(null);

        try {
            const data = await fetchDadJoke();
            if (data?.joke) {
                setJoke(data.joke);
            } else {
                console.error("Unexpected API response:", data);
            }
        } catch (error) {
            console.error("Error fetching joke:", error);
        }
    };

    useEffect(() => {
        getJoke();
    }, []);

    if (!joke) {
        return <p>Loading...</p>;
    }

    return (
        <div className="p-6 border rounded shadow-md bg-gray-100 max-w-md mx-auto text-center">
            <p className="text-xl font-semibold mb-4">"{joke}"</p>

            <button 
                onClick={getJoke}
                className="w-full bg-[#C5705D] text-white py-2 px-4 rounded-lg shadow-md hover:bg-[#a45a4a] transition"
            >
                New Joke
            </button>
        </div>
    );
}
