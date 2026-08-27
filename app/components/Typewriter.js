"use client";

import { useEffect, useState } from "react";

const words = [
    "WEB DEVELOPER",
    "MOBILE DEVELOPER",
    "FULL STACK DEVELOPER",
    "UI/UX DESIGNER"
];

export default function Typewriter() {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const currentWord = words[wordIndex];


        if (!deleting && text === currentWord) {
            const timeout = setTimeout(() => {
                setDeleting(true);
            }, 2000);

            return () => clearTimeout(timeout);
        }

        const timeout = setTimeout(
            () => {
                if (!deleting) {
                    setText(currentWord.substring(0, text.length + 1));
                } else {
                    setText(currentWord.substring(0, text.length - 1));

                    if (text.length === 0) {
                        setDeleting(false);
                        setWordIndex((prev) => (prev + 1) % words.length);
                    }
                }
            },
            deleting ? 50 : 100
        );

        return () => clearTimeout(timeout);
    }, [text, deleting, wordIndex]);

    return (
        <span className="relative pr-1 eyebrow" >
            {text}
            <span className="absolute right-0 top-0 h-full w-[2px] bg-white animate-pulse" />
        </span>
    );
}