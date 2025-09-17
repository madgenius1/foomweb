'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiBars3, HiXMark } from 'react-icons/hi2';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8" aria-label="Global">
                {/* Logo Section */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-2">
                        <Image
                            src="/foom.svg"
                            alt="foom logo"
                            width={140}
                            height={70}
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link href="/services" className="text-md font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:text-purple-600">
                        Features
                    </Link>
                    <Link href="/about" className="text-md font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:text-purple-600">
                        How it Works
                    </Link>
                    <Link href="/blog" className="text-md font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:text-purple-600">
                        About Us
                    </Link>
                    {/* <Link href="/contact" className="text-sm font-semibold leading-6 text-gray-900 transition-colors duration-200 hover:text-purple-600">
                        Contact
                    </Link> */}
                </div>

                {/* Buttons Section */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
                    <Link href="/waitlist" className="inline-block px-8 py-3 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md transition-colors duration-200 hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                        Join Waitlist
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-expanded={isOpen ? 'true' : 'false'}
                        aria-controls="mobile-menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isOpen ? <HiXMark size={24} className="text-purple-600" aria-hidden="true" /> : <HiBars3 size={24} className="text-purple-600" aria-hidden="true" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu (conditionally rendered) */}
            {isOpen && (
                <div className="lg:hidden" role="dialog" aria-modal="true">
                    <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            {/* <Link href="" className="-m-1.5 p-1.5 ">

                            </Link> */}
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <HiXMark size={24} className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <Link href="/services" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Features
                                    </Link>
                                    <Link href="/about" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        How It Works
                                    </Link>
                                    <Link href="/blog" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        About Us
                                    </Link>
                                    <Link href="/contact" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        Contact
                                    </Link>
                                </div>
                                <div className="py-6">
                                    <button className="w-full rounded-md border border-purple-600 bg-white px-4 py-2 text-sm font-semibold text-purple-600 transition-colors duration-200 hover:bg-purple-600 hover:text-white">
                                        Android
                                    </button>
                                    <button className="mt-4 w-full rounded-md border-transparent bg-purple-600 px-4 py-2 text-sm font-semibold text-white transition-colors duration-200 hover:bg-purple-700">
                                        iOS
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}