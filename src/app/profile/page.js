"use client"

import { MotionDock } from "../page";
import { motion } from "framer-motion";
import Image from 'next/image'
import { useState } from "react";


export default function Profile() {

    const [skills, setPopSkills] = useState(false)

    const reveal = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <>
            <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
                <div className="z-10"><MotionDock isTop={false} /></div>
                <div className="flex flex-col items-center justify-center gap-10 text-3xl h-full"> {/*  after 810 we have to use media query */}
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
                                    <div className="px-3 cursor-pointer py-1 text-white bg-[#dd4040] rounded-4xl" onClick={() => setPopSkills(true)}>Key Skills Learned</div>
                                    <div className="px-3 cursor-pointer py-1 text-white bg-[#dd4040] rounded-4xl" onClick={() => setPopSkills(true)}>Server Management (P1)</div>
                                    <div className="px-3 cursor-pointer py-1 text-white bg-[#dd4040] rounded-4xl" onClick={() => setPopSkills(true)}>Payment Platform (P2)</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className="z-10">
                {skills &&
                    <PopUpModal handleSkills={setPopSkills} />
                }
            </div>
        </>


    );
}


export const PopUpModal = ({ handleSkills }) => {

    const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit magna eget erat tempus ultrices. Sed sed mi bibendum, faucibus libero vitae, consectetur arcu. Maecenas auctor, augue non rhoncus sagittis, ex mauris posuere ante, ut feugiat elit elit in justo. Duis suscipit vestibulum orci. Vivamus semper eu felis et molestie. Phasellus ornare libero vitae neque convallis, sed pharetra metus feugiat. Integer interdum massa et mi maximus molestie. Quisque consectetur vel sapien a semper. In condimentum mi lobortis diam vestibulum, sed elementum nibh eleifend. Maecenas quis eros vestibulum, finibus nulla ut, hendrerit nunc. Vestibulum iaculis erat venenatis dolor facilisis, sit amet sodales libero ullamcorper. Quisque risus enim, dictum in lectus sit amet, egestas finibus sapien. Sed malesuada ipsum metus. Aliquam at ultricies odio, dapibus ultrices dolor. Phasellus auctor eleifend ipsum, vitae luctus libero. In nec interdum nulla. Sed et magna quis ligula interdum varius ac a justo. Fusce aliquet, tellus eget efficitur dapibus, massa ex vestibulum ante, et luctus arcu felis nec enim. Ut rutrum mi et magna mollis, vel sollicitudin ipsum facilisis. Nam dictum elit eros, sed sagittis massa sollicitudin id. Aenean malesuada, lorem et tincidunt tempus, tortor felis maximus tellus, sed ultrices nisl ante quis mi. Donec at augue eget massa condimentum imperdiet at sed leo. Curabitur mollis est nec magna iaculis, eget eleifend arcu suscipit. Vestibulum et semper magna, et vehicula ex. Aenean gravida leo in faucibus tincidunt. Donec auctor, leo sed lobortis lacinia, libero eros aliquet dui, vitae facilisis nisl mi vel arcu. Nunc nec tempor nisl. Sed pharetra faucibus maximus. Sed velit nibh, lobortis id ultrices pretium, feugiat at ipsum. Donec malesuada est at enim rhoncus venenatis. Vivamus sagittis accumsan diam. In sed convallis massa, et faucibus mi. Duis volutpat vulputate consectetur. Donec commodo turpis velit, sed venenatis magna pulvinar sit amet. Duis tempor risus vitae ultricies facilisis. Praesent non est ac sapien rutrum tincidunt at vel urna. Duis eget ligula sodales, interdum urna ut, pellentesque sapien. Quisque condimentum metus risus, ac venenatis risus tempor ut. Nullam dignissim erat eu mi tempus vulputate."
    return (
        <div onClick={() => handleSkills(false)} className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="relative bg-white p-10 rounded-lg shadow-lg max-w-4xl w-full text-black">
                <div
                    className="absolute top-4 right-4 cursor-pointer flex justify-center items-center font-[family-name:var(--font-geist-sans)] text-2xl rounded-lg w-8 h-8"
                    onClick={() => handleSkills(false)}
                >
                    X
                </div>
                {dummyText}
            </div>
        </div>

    )
}


// bg-[#dddddd33] backdrop-blur-md border-2 rounded-3xl p-10

