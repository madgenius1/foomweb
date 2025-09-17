import Link from "next/link"
import Image from "next/image"

export default function Hero() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center ">
            <div className="mx-auto max-w-screen-xl lg:p-8 md:px-6 md:py-16 px-4 py-8 flex lg:flex-row md:flex-row flex-col justify-between items-center">
                {/* Left Content */}
                <div className="flex flex-col space-y-4 justify-start items-center lg:py-10 md:py-12 py-12 max-w-3xl">
                    <div className="lg:px-12 ">
                        <h1 className="font-extrabold text-gray-950 dark:text-white  md:leading-snug pb-4 lg:text-6xl md:text-5xl text-3xl leading-snug">
                            Turn Your Screen Time Into Real Savings.
                        </h1>
                        <p className="text-gray-700 dark:text-gray-300 lg:text-xl md:text-lg">
                            Transform endless scrolling into real investments in Money Market Funds.
                        </p>
                        <div className="py-4">
                            <Link href="/waitlist" className="inline-block px-8 py-4 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md transition-colors duration-200 hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                                Join Waitlist
                            </Link>
                        </div>
                    </div>
                    {/* Uncomment links below when app is ready. */}
                    {/* <div className="flex flex-col justify-start sm:flex-row gap-4 mt-8">
                        <Link href="/download" className="inline-block px-8 py-4 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md transition-colors duration-200 hover:bg-white hover:text-purple-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2">
                            Download App
                        </Link>
                        <Link href="/get-started" className="inline-block px-8 py-4 text-base font-semibold text-purple-600 bg-white rounded-lg border-2 border-purple-600 transition-colors duration-200 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                            Get Started
                        </Link>
                    </div> */}
                </div>
                {/* Right Content */}
                <div className="py-4 lg:py-8 w-full max-w-xl md:py-6">
                    <Image
                        src="/mobileappimage.png"
                        alt="Mobile App"
                        width={500}
                        height={350}
                        className="object-contain"
                        priority
                    />
                </div>

            </div>
        </main>
    )
}