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
        description: "Foom turns your screen time into savings and investments. Instead of wasting hours scrolling, Foom converts your time into financial growth. Every minute you spend online can now help build wealth."
    },
    {
        title: "How does Foom actually work?",
        description: "Before you open a social or gaming app, Foom asks how many minutes you want to spend. When your time runs out, you can either stop or buy more minutes with Foom tokens. The token purchases automatically go into your savings or investment account."
    },
    {
        title: "Why should I pay to use my own screen time?",
        description: "You’re not really paying — you’re saving. Every time you “buy more tokens,” your money is invested in your own money market fund account. Foom simply turns your distraction into disciplined financial growth."
    },
    {
        title: "Who is Foom for?",
        description: "Foom is designed for Gen Z, Millennials, students, and young professionals who want to save without budgeting stress. If you spend a lot of time on social media or gaming, Foom is perfect for you. It helps you stay in control of your time and money effortlessly."
    },
    {
        title: "What do I get out of using Foom?",
        description: "Screen time apps only show your usage, and blockers restrict you with no rewards. Foom is the only app that links screen time to real savings and investments. It doesn’t punish you — it rewards you for making better choices."
    }

];

export default function FAQComponent() {

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
                                    ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <p className="text-sm w-full lg:text-md dark:text-white text-[#121212] mb-2">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}