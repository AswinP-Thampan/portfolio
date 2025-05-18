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
                        <div className="w-52 h-52 rounded-full mt-3 bg-[#dd3333] border-4 border-black/20 shadow-lg flex items-center justify-center relative overflow-hidden">
                            <Image
                                src="/pfp.png"
                                alt="Picture of the Author"
                                fill
                                className="object-cover scale-130 translate-y-8 translate-x-2"
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
                    Work Experience
                    <motion.div
                        className="w-[700px]"
                        variants={reveal}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5 }}
                    >
                        <div className="text-base font-medium leading-snug font-[family-name:var(--font-geist-mono)] flex flex-col gap-2">
                            With 2.3+ years of industry experience. Skilled in collaborating and managing with cross-functional teams I have learned a lot of skills. Lorem Ipsum asdas asd oas  iuopjjp asdipn 0piasd pad -0 o1 e20inlasda sdoansd asd on dals daos dals daos dasod asdoas dllasd asodl asdas d3o10dolka gfof0oelasdo asdla sdoa sdoaos jdsa. Asdas adsadas ffeqsfq asdwvg.
                            <div>
                                <div className="text-lg"> <span className="font-[family-name:var(--font-geist-sans)] text-2xl tracking-wide leading-non">PREV ORG. &nbsp;:</span> Comviva Technologies &emsp;&emsp;&emsp;&emsp;<span className="font-[family-name:var(--font-geist-sans)] text-2xl tracking-wide leading-non">DURATION&nbsp;&nbsp;&nbsp;:</span> 2 years and 3 months</div>
                                <div className="text-lg"> </div>
                                <div className="text-lg"> <span className="font-[family-name:var(--font-geist-sans)] text-2xl tracking-wide leading-non">PROJECTS&nbsp;&nbsp;:</span> 2 Projects (Prod & Service)</div>
                            </div>
                            <motion.div
                                className="flex flex-row gap-5 font-[family-name:var(--font-geist-sans)] text-2xl tracking-wide leading-non"
                                variants={reveal}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 1 }}>
                                <div className="px-3 cursor-pointer py-1 text-white bg-[#dd4040] rounded-4xl">Key Skills Learned</div>
                                <div className="px-3 cursor-pointer py-1 text-white bg-[#dd4040] rounded-4xl">Server Management (P1)</div>
                                <div className="px-3 cursor-pointer py-1 text-white bg-[#dd4040] rounded-4xl">Payment Platform (P2)</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </div>

    );
}


// bg-[#dddddd33] backdrop-blur-md border-2 rounded-3xl p-10

