"use client"

import { MotionDock } from "../page";
import { motion } from "framer-motion";
import Image from 'next/image'


export default function Profile() {

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
            <div className="flex flex-col items-center mt-32 gap-10 text-3xl">
                <motion.div
                    className="flex flex-row gap-5 rounded-3xl max-w-[90%] w-[700px]  "
                    variants={reveal}
                    initial="hidden"
                    animate="visible">
                    <div>
                        About
                        <div className="w-52 h-52 rounded-full mt-3 bg-[#dd3333] border-4 border-white shadow-lg flex items-center justify-center relative overflow-hidden">
                            <Image
                                src="/pfp.png"
                                alt="Picture of the Author"
                                fill
                                className="object-cover scale-120 translate-y-5 translate-x-2"
                            />
                        </div>

                    </div>
                    <div className="text-base font-medium pt-15 leading-snug font-[family-name:var(--font-geist-mono)]">
                        I’m a Full Stack Web Developer who enjoys building dynamic, responsive web applications from the ground up. I love coding things from scratch, bringing creative ideas to life in the browser, and crafting smooth, interactive user experiences. With a passion for continuous learning and a collaborative mindset, I thrive in environments where I can explore new technologies and take on challenges that help me grow. Let’s build something great together!                    </div>
                </motion.div>
                <motion.div
                    className="flex flex-col gap-5 max-w-[90%] pb-10 overflow-x-hidden "
                    variants={reveal}
                    initial="hidden"
                    animate="visible">
                    Details
                    {[1, 2, 3, 4].map((_, i) => (
                        <motion.div
                            key={i}
                            className="bg-[#dddddd33] backdrop-blur-md border-2 rounded-3xl p-10 w-[700px]"
                            variants={reveal}
                            initial="hidden"
                            animate="visible"
                            transition={{ delay: 0.3 + i * 0.15 }}
                        >
                            Details #{i}
                            <div className="text-base leading-snug font-[family-name:var(--font-geist-mono)]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur viverra sem vitae ex bibendum, sed gravida nunc placerat. Praesent quis elementum neque. Ut turpis nisl, consectetur elementum nibh a, feugiat tincidunt augue. Etiam pulvinar ac mauris sed iaculis. Praesent scelerisque urna malesuada, varius velit nec, varius lacus. Quisque aliquam est ac velit cursus, vitae suscipit diam suscipit. Ut condimentum tortor sed pellentesque commodo.
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>

    );
}


