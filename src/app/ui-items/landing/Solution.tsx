import Image from "next/image"

const solutionsArray = [
    { url: "/money.webp", title: "Turn Screen Time to Income", statement: "Use your social media and gaming habits to earn and save money that grows over time." },
    { url: "/control.webp", title: "Build Financial Discipline", statement: "Develop strong financial habits and saving discipline with a system that works for you." },
    { url: "/growth.webp", title: "Achieve Your Financial Goals", statement: "Stay on track and meet your personal financial goals with ease." },
]

export default function Solution() {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-12 lg:py-24">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                        Designed for Your Scrolling Habits
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Foom&apos;s design leverages your social media and gaming habits, transforming them into positive financial behaviors.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-8 my-8">
                    {solutionsArray.map((sol, index) => (
                        <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 lg:p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105">
                            <div className="mb-4">
                                <Image
                                    src={sol.url}
                                    alt={sol.title}
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg lg:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                {sol.title}
                            </h3>
                            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-400">
                                {sol.statement}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}