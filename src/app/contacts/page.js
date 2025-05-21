"use client"

import Image from "next/image";
import { MotionDock } from "../page";
import { motion } from "framer-motion";

export default function Contacts() {
    const btns = ["/Github_Btn.png", "/Mail_Btn.png", "/LinkedIn_Btn.png"];
    const btnsName = ["https://github.com/AswinP-Thampan", "mailto:aswinp.thampan@gmail.com", "https://www.linkedin.com/in/aswinp-thampan/"];

    const reveal = (i) => ({
        hidden: { y: 100, scale: 0.1, opacity: 0 },
        visible: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut", delay: (i + 1) * 0.2 },
        },
    });

    const textreveal = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
            <div className="z-10">
                <MotionDock isTop={false} />
            </div>
            <div className="flex flex-col w-full h-full justify-start md:justify-center p-10 md:p-20 mt-20 md:mt-0 items-center text-3xl lg:text-6xl gap-10">
            <motion.div variants={textreveal} initial="hidden" animate="visible">Feel free to reach out at any of these socials...</motion.div>
            <div className="flex flex-row flex-wrap gap-5 lg:gap-20 p-0 md:p-10 justify-center">
                {btns.map((btn, i) => (
                    <motion.div
                        key={i}
                        variants={reveal(i)}
                        initial="hidden"
                        animate="visible"
                    >
                        <div
                         onClick={() => window.open(btnsName[i])}
                         className="relative w-40 h-40 lg:w-80 lg:h-80 border-2 box-border border-black/50 rounded-4xl flex justify-center items-center overflow-hidden cursor-pointer opacity-90 md:opacity-50 hover:opacity-80 hover:scale-120 hover:transition-discrete">
                        <Image
                            src={btn}
                            alt={`button-${i}`}
                            fill
                        />
                        </div>
                        
                    </motion.div>
                ))}
            </div>
            </div>
        </div>
    );
}
