"use client"; // Required for Next.js App Router

import Link from "next/link";

export function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">React Playground App</h1>
                
                <ul className="flex space-x-6">
                    <li>
                        <Link href="/" className="hover:text-gray-300">Home</Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-gray-300">About</Link>
                    </li>
                    <li>
                        <Link href="/dadjokes" className="hover:text-gray-300">Dad Jokes</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
