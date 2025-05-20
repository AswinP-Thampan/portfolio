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

    return (
        <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
            <div className="z-10">
                <MotionDock isTop={false} />
            </div>
            <div className="flex flex-col w-full h-full justify-center items-center text-6xl">
                Feel free to reach out at any of these socials...
            <div className="flex flex-row gap-20 p-10">
                {btns.map((btn, i) => (
                    <motion.div
                        key={i}
                        variants={reveal(i)}
                        initial="hidden"
                        animate="visible"

                        
                    >
                        <div
                         onClick={() => window.open(btnsName[i])}
                         className="relative w-80 h-80 border-2 box-border border-black/50 rounded-4xl flex justify-center items-center overflow-hidden cursor-pointer opacity-50 hover:opacity-80 hover:scale-120 hover:transition-discrete">
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
