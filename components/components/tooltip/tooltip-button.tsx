'use client'; // Ensure client-side interactivity
import { useState } from 'react';

interface TooltipButtonProps {
    icon: JSX.Element;
    content: string;
}

export default function TooltipButton({ icon, content }: TooltipButtonProps) {
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    return (
        <div
            className="relative border-sky-100 z-10 bg-sky-50 shadow-md cursor-pointer rounded flex justify-center items-center border group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button type="button" className="text-gray-600 text-2xl transition-all duration-100 group-hover:text-gray-900 group-hover:scale-125">
                {icon}
            </button>

            <div
                role="tooltip"
                className={`absolute bottom-11 text-[13px] z-10 inline-block px-2 py-1 text-sm font-medium
                    text-white transition-opacity duration-300 bg-gray-900
                    rounded-lg shadow-sm tooltip-arrow dark:bg-gray-700
                    ${isVisible ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            >
                {content}
            </div>
        </div>
    );
}
