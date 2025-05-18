"use client"

import { MotionDock } from "../page";
import { motion } from "framer-motion";

export default function Projects() {

    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
            <div className="z-10"><MotionDock isTop={false} /></div>
            <motion.div
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{ delay: 1 }}
                className="flex flex-row gap-10 p-10 w-full h-full justify-center items-center text-6xl"
            >
                [WIP] Projects to be Added
            </motion.div>
        </div>
    );
}


