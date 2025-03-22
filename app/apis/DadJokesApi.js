"use server";

const API_URL = "https://icanhazdadjoke.com/";

export async function fetchDadJoke() {
    try {
        const response = await fetch(`${API_URL}`,
            {
                method: "GET",
                headers: {
                    'Accept': 'application/json'
                }
            }
        );

        if(!response.ok) {
            throw new Error('Failed to fetch joke');
        }

        return await response.json();
    } catch (e) {
        console.error(e);
        throw e;
    }
}