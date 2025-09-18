'use client'

import { IoApps, IoLink, IoPersonAddOutline, IoCashOutline } from "react-icons/io5";

import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useWindowSize } from "@uidotdev/usehooks";
import { IconType } from "react-icons";

const HiwComponent = () => {
    const [open, setOpen] = useState(items[0].id);

    return (
        <section className="p-4">
            <div className="flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden">
                {items.map((item) => {
                    return (
                        <Panel
                            key={item.id}
                            open={open}
                            setOpen={setOpen}
                            id={item.id}
                            Icon={item.Icon}
                            title={item.title}
                            imgSrc={item.imgSrc}
                            description={item.description}
                        />
                    );
                })}
            </div>
        </section>
    );
};

interface PanelProps {
    open: number;
    setOpen: Dispatch<SetStateAction<number>>;
    id: number;
    Icon: IconType;
    title: string;
    imgSrc: string;
    description: string;
}

const Panel = ({
    open,
    setOpen,
    id,
    Icon,
    title,
    imgSrc,
    description,
}: PanelProps) => {
    const { width } = useWindowSize();
    const isOpen = open === id;

    return (
        <>
            <button
                className="bg-white hover:bg-slate-50 transition-colors p-3 border-r-[1px] border-b-[1px] border-slate-200 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group"
                onClick={() => setOpen(id)}
            >
                <span
                    style={{
                        writingMode: "vertical-lr",
                    }}
                    className="hidden text-gray-950 lg:block text-xl font-medium rotate-180"
                >
                    {title}
                </span>
                <span className="block lg:hidden text-xl font-light">{title}</span>
                <div className="w-6 lg:w-full aspect-square bg-purple-600 text-white grid place-items-center">
                    <Icon />
                </div>
                <span className="w-4 h-4 bg-white group-hover:bg-slate-50 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-slate-200 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key={`panel-${id}`}
                        variants={width && width > 1024 ? panelVariants : panelVariantsSm}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                        }}
                        className="w-full h-full overflow-hidden relative bg-black flex items-end"
                    >
                        <motion.div
                            variants={descriptionVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="px-4 py-6 bg-black/40 backdrop-blur-sm text-white"
                        >
                            <p>{description}</p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default HiwComponent;

const panelVariants = {
    open: {
        width: "100%",
        height: "100%",
    },
    closed: {
        width: "0%",
        height: "100%",
    },
};

const panelVariantsSm = {
    open: {
        width: "100%",
        height: "200px",
    },
    closed: {
        width: "100%",
        height: "0px",
    },
};

const descriptionVariants = {
    open: {
        opacity: 1,
        y: "0%",
        transition: {
            delay: 0.125,
        },
    },
    closed: { opacity: 0, y: "100%" },
};

const items = [
    {
        id: 1,
        title: "Create Account",
        Icon: IoPersonAddOutline,
        imgSrc: "/handshake.webp",
        description:
            "Sign up in seconds and set up your FOOM profile. No complicated forms, just a quick start to saving while you scroll.",
    },
    {
        id: 2,
        title: "Link Account",
        Icon: IoLink,
        imgSrc: "/linkaccount.webp",
        description:
            "Securely connect your savings or investment account. Your money always stays safe and grows in your chosen account.",
    },
    {
        id: 3,
        title: "Manage Apps",
        Icon: IoApps,
        imgSrc: "/manageapps.webp",
        description:
            "Pick the social and gaming apps you want to control. Foom tracks your time and turns every extra minute into savings.",
    },
    {
        id: 4,
        title: "Save and Invest",
        Icon: IoCashOutline,
        imgSrc: "/savings.webp",
        description:
            "Each token you spend on screen time funds your savings or investments. Distraction becomes discipline — and hit your financial goals. You can withdraw at anytime.",
    },
];