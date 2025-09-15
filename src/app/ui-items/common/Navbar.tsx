

export default function Navbar() {
    return (
        <nav className="sticky p-4 top-0 z-50 shadow-md">
            <div className="flex items-center flex-row justify-between max-w-screen-xl mx-auto">
                <div className="flex justify-start">
                    <h3 className="text-md text-gray-950">Logo Link</h3>
                </div>
                <div className=" flex justify-center flex-row gap-4 space-x-2">
                    <h3 className="text-md text-gray-950">Item One</h3>
                    <h3 className="text-md text-gray-950">Item Two</h3>
                    <h3 className="text-md text-gray-950">Item Three</h3>
                    <h3 className="text-md text-gray-950">Item Four</h3>
                </div>
                <div className="flex flex-row gap-4 justify-end">
                    <h3 className="text-md text-gray-950">Item One</h3>
                    <h3 className="text-md text-gray-950">Item One</h3>
                </div>
            </div>
        </nav>
    )
}