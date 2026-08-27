"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
    "/images/employee.png",
    "/images/univents.png",
    "/images/pacita.png",

];

export default function ImageCarousel() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-[300px] w-full max-w-[600px] overflow-hidden rounded-2xl">
            {images.map((image, index) => (
                <Image
                    key={image}
                    src={image}
                    alt={`Portfolio image ${index + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}
        </div>
    );
}