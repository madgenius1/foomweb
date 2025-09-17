

import Image from "next/image";
import HiwComponent from "../components/HiwComponent";
import Link from "next/link";

export default function HowItWorks() {
    return (
        <section className="min-h-screen bg-gray-100 dark:bg-gray-800 ">
            <div className="lg:py-20 md:py-16 py-12 max-w-screen-xl mx-auto lg:px-8 md:px-6 px-4 flex lg:flex-row md:flex-row flex-col gap-6 lg:gap-4 ">
                <div className="flex items-center lg:justify-end justify-center py-4 lg:w-1/3 md:w-1/3 w-full">
                    <Image
                        src="/mockup.webp"
                        alt="foom app"
                        width={420}
                        height={360}
                        className="rounded-md shadow-md object-contain"
                    />
                </div>
                <div className="flex flex-col justify-start lg:w-2/3 md:2/3 w-full py-4">
                    <h3 className="text-md lg:text-3xl md:text-2xl text-gray-900 dark:text-gray-100 font-semibold">
                        Foom helps you enhance your saving habits.
                    </h3>
                    <HiwComponent />
                </div>
            </div>
            <div className="pb-12 flex items-center justify-center">
                <Link href="/FAQs" className="inline-block px-8 py-4 text-base font-semibold text-white bg-purple-600 rounded-lg border-2 border-white transition-colors duration-200 hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                    Frequently Asked Questions
                </Link>
            </div>
        </section>
    )
}