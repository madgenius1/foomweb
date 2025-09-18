
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="max-w-screen-xl mx-auto">
            <div className="lg:pX-8 md:pX-6 pX-4 lg:py-20 md:py-16 py-12">
                <div className="flex flex-row justify-between p-4">
                    <div className="lg:w-3/4 md:1/4 w-full">
                        <div className="max-w-4xl flex flex-col">
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
                        </div>
                    </div>
                    <div className="lg:w-1/4 md:1/4 w-full">
                        <h3 className="text-md text-gray-950">Footer</h3>

                    </div>
                </div>
                <hr className="border-gray-700 my-6 py-6" />
            </div>
        </footer>
    )
}