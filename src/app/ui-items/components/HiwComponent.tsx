"use client";

import Link from 'next/link';
import { useState } from 'react';

interface AccordionItem {
    title: string;
    description: string;
    // linkHref: string;
    // linkText: string;
}

const accordionItems: AccordionItem[] = [
    {
        title: "What is the Foom app?",
        description: "Overcome complexities and administrative bureaucracies.",
        // linkHref: "/for-artists",
        // linkText: "Discover More"
    },
    {
        title: "How does Foom actually work?",
        description: "Onboard your whole team, split revenue automatically.",
        // linkHref: "/for-labels",
        // linkText: "Discover More"
    },
    {
        title: "Why should I pay to use my own screen time?",
        description: "Manage your catalog and royalties with ease.",
        //     linkHref: "/for-publishers",
        //     linkText: "Learn More"
    },
    {
        title: "Who is Foom for?",
        description: "Manage your catalog and royalties with ease.",
        //     linkHref: "/for-publishers",
        //     linkText: "Learn More"
    },
    {
        title: "What do I get out of using Foom?",
        description: "Manage your catalog and royalties with ease.",
        //     linkHref: "/for-publishers",
        //     linkText: "Learn More"
    }

];

export default function HiwComponent() {

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex flex-col items-center lg:gap-8 md:gap-6 gap-4 py-4 w-full">
            {accordionItems.map((item: AccordionItem, index: number) => (
                <div
                    key={index}
                    className={`flex flex-col gap-2 w-full border-b border-gray-300 dark:border-gray-700 py-4 cursor-pointer`}
                    onClick={() => handleToggle(index)}
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-md lg:text-xl md:text-xl font-semibold dark:text-white text-[#121212]">
                            {item.title}
                        </h2>
                        <svg
                            className={`w-5 h-5 text-[#121212] dark:text-white transform transition-transform duration-300
                                        ${openIndex === index ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </div>

                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out p-2
                                    ${openIndex === index ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="text-sm w-full lg:text-md dark:text-white text-[#121212] mb-4">
                            {item.description}
                        </p>
                        {/* <Link
                            href={item.linkHref}
                            className="px-6 py-3 lg:w-3/4 w-full rounded-md bg-white text-[#121212] hover:bg-gray-950 ring-[#121212] ring-2 hover:text-white dark:hover:ring-white dark:hover:text-white text-center font-medium block"
                        >
                            {item.linkText}
                        </Link> */}
                    </div>
                </div>
            ))}
        </div>
    );
}