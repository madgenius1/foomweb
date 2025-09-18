
import HiwComponent from "../components/HiwComponent"

export default function HowItWorks() {
    return (
        <section className="lg:py-20 md:py-16 py-8 bg-gray-100 dark:bg-gray-800 ">
            <div className="max-w-screen-xl mx-auto lg:px-8 md:px-6 px-4">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                        How Foom Works
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Transform your screen time to savings and investments in four easy steps.
                    </p>
                </div>
                <div className="lg:py-8 md:py-6 py-4">
                    <HiwComponent />
                </div>
            </div>
        </section>
    )
}