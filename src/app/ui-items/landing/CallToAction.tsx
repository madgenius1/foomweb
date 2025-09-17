
import Link from "next/link"

export default function CallToAction() {
    return (
        <section className="bg-white dark:bg-purple-600 py-6 lg:py-12">
            <div className="max-w-screen-xl mx-auto">
                <div className="flex-col flex items-center space-y-6 text-center py-6">
                    <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-600 dark:text-white font-bold">
                        Savings at your fingertips
                    </h2>
                    <p className="text-md lg:text-lg  dark:text-gray-100 text-purple-600 opacity-90 font-light">
                        Join 1000+ users of <span className="font-semibold">foom app</span>. <br /> The best savings app designed for Gen Z and Millenials.
                    </p>
                    {/* Link to be turned to download app */}
                    <Link href="/waitlist" className="inline-block px-8 py-4 text-base font-semibold text-purple-600 bg-white rounded-lg border-2 border-purple-600 transition-colors duration-200 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                        Join Waitlist
                    </Link>
                </div>
            </div>
        </section>

    )
}