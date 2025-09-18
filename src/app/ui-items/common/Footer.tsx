
import Link from "next/link"
import Image from "next/image"
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";


const links = [
    { url: "mailto:info@foom.app", title: "info@foom.app" },
    { url: "tel:+254712345678", title: "+254 712 345 678" },
    { url: "tel:+254712345678", title: "+254 712 345 678" },
]
const socials = [
    { icon: <FaFacebook size={24} className="dark:text-gray-900 text-white" />, url: "https://www.facebook.com" },
    { icon: <FaWhatsapp size={24} className="dark:text-gray-900 text-white" />, url: "https://www.whatsapp.com" },
    { icon: <FaInstagram size={24} className="dark:text-gray-900 text-white" />, url: "https://www.instagram.com" },
    { icon: <FaTiktok size={24} className="dark:text-gray-900 text-white" />, url: "https://www.tiktok.com" },
    { icon: <FaLinkedin size={24} className="dark:text-gray-900 text-white" />, url: "https://www.linkedin.com" },
    { icon: <RiTwitterXFill size={24} className="dark:text-gray-900 text-white" />, url: "https://www.x.com" }
]

const details = [
    {
        id: "Company",
        links: [
            { textOne: "About Us", linkOne: "/about" },
            { textOne: "Features", linkOne: "/features" },
            { textOne: "Partners", linkOne: "/partners" },
            { textOne: "Join Waitlist", linkOne: "/waitlist" },
        ]
    },
    {
        id: "Support",
        links: [
            { textOne: "How It Works", linkOne: "/working" },
            { textOne: "FAQs", linkOne: "/FAQs" },
            { textOne: "Privacy Policy", linkOne: "/privacy" },
            { textOne: "Terms of Use", linkOne: "/terms" },
        ]
    }
];


export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className=" dark:bg-gray-100 bg-gray-800">
            <div className="lg:px-8 md:px-6 px-4 lg:py-20 md:py-16 py-12 max-w-screen-xl mx-auto">
                <div className="flex lg:flex-row flex-col lg:justify-between gap-4 p-4">
                    {/* Left Content */}
                    <div className="lg:w-1/3 w-full">
                        <div className=" flex flex-col space-y-6">
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
                        <div className="lg:py-8 md:py-6 py-4 flex flex-col space-y-2">
                            {links.map((link, index) =>
                            (
                                <Link key={index} href={link.url} className="text-sm lg:text-md hover:underline font-medium text-white dark:text-gray-900">
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        <p className="py-4 text-sm lg:text-md font-medium text-white dark:text-gray-900">
                            69 6th Avenue, Hurlingham East, Nairobi
                        </p>
                        <div className="py-6 flex flex-row space-x-4 ">
                            {socials.map((social, index) =>
                            (
                                <Link key={index} href={social.url} className="rounded-full">
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Right Content */}
                    <div className="lg:w-2/3 w-full lg:flex lg:justify-end">
                        <div className="grid grid-cols-2 lg:grid-cols-2 gap-6 md:grid-cols-2">
                            {details.map((section, index) => (
                                <div key={index} className="flex flex-col space-y-2">
                                    <h3 className="text-md font-semibold text-white dark:text-gray-950">
                                        {section.id}
                                    </h3>
                                    <ul className="space-y-4">
                                        {section.links.map((link, linkIndex) => (
                                            <li key={linkIndex}>
                                                <Link href={link.linkOne} className="text-gray-400 hover:text-white dark:text-gray-800 dark:hover:text-gray-950">
                                                    {link.textOne}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
                <hr className="border-gray-700 my-6 py-6" />
                <p className=" text-sm text-center lg:text-md">
                    <strong className="text-white dark:text-gray-900">Foom App | Copyright </strong> © {currentYear} | All Rights Reserved
                </p>
            </div>
        </footer>
    )
}