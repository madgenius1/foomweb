

export default function JoinWaitlist() {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 py-6 lg:py-20 md:py-16">
            <div className="max-w-screen-xl mx-auto flex lg:flex-row flex-col gap-4 justify-between items-center px-4">
                <div className="py-8 max-w-4xl px-4">
                    <h3 className="text-lg leading-relaxed lg:text-2xl md:text-xl text-gray-900 dark:text-white font-medium">
                        Turn your screen time and scrolling habits into savings and investments. <br />
                        Be among the first to get the <span className="font-bold">Foom</span> experience.
                    </h3>
                </div>
                <div className="w-full flex-col justify-start items-start gap-2 flex px-4">
                    <label className="flex gap-1 items-center text-gray-900 dark:text-white text-base font-medium leading-relaxed">
                        Email
                    </label>
                    <input type="email" required className="w-full focus:outline-none text-gray-900 dark:text-white placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-2 rounded-lg shadow-md border border-gray-900 dark:border-white justify-start items-center gap-2 inline-flex" placeholder="Your Email" />
                    <button className=" cursor-pointer text-white dark:text-gray-900 py-3 px-6 rounded-md dark:bg-white bg-gray-800" type="submit">
                        Join Waitlist
                    </button>
                </div>
            </div>
        </section>
    )
}