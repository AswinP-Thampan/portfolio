"use client"

import { MotionDock } from "../page";
import { motion } from "framer-motion";
import Image from 'next/image'
import { useState } from "react";


export default function Profile() {

    const [skills, setPopSkills] = useState(false)
    const [project, setProjects] = useState(null)

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
                            I’m a Full Stack Web Developer who enjoys building dynamic, responsive web applications from the ground up. I love coding things from scratch, bringing creative ideas to life in the browser, and crafting smooth, interactive user experiences. With a passion for continuous learning and a collaborative mindset, I thrive in environments where I can explore new technologies and take on challenges that help me grow. Let’s build something great together! </div>
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
                                With 2.3+ years of experience as a Full Stack Developer, I specialize in building scalable, high-performance web applications using React, JavaScript, and modern frameworks. I’ve contributed to end-to-end development from architecting frontend experiences to integrating backend services, while collaborating closely with cross-functional teams. My approach blends clean code practices with a strong understanding of user-centric design, enabling me to consistently deliver robust, maintainable solutions aligned with business goals.
                                <div>
                                    <div className="text-lg flex justify-between">
                                        <div><span className="font-[family-name:var(--font-geist-sans)] text-2xl tracking-wide leading-non">PREV ORG. &nbsp;:&nbsp;</span>Comviva Technologies</div>
                                        <div><span className="font-[family-name:var(--font-geist-sans)] text-2xl tracking-wide leading-non">ROLE &nbsp;:&nbsp;</span>Product Development Engineer</div>
                                    </div>
                                    <div className="text-lg flex justify-between">
                                        <div><span className="font-[family-name:var(--font-geist-sans)] text-2xl tracking-wide leading-non">PROJECTS &nbsp;:&nbsp;</span>2 Projects (Prod & Service)</div>
                                        <div><span className="font-[family-name:var(--font-geist-sans)] text-2xl tracking-wide leading-non">DURATION &nbsp;:&nbsp;</span>2 years and 3 months</div>
                                    </div>
                                </div>
                                <motion.div
                                    className="flex flex-row gap-5 font-[family-name:var(--font-geist-sans)] text-2xl tracking-wide leading-non"
                                    variants={reveal}
                                    initial="hidden"
                                    animate="visible"
                                    transition={{ delay: 1 }}>
                                    <div className="px-3 cursor-pointer py-1 text-white bg-[#dd4040] rounded-4xl" onClick={() => setPopSkills(true)}>Key Skills Learned</div>
                                    <div className="px-3 cursor-pointer py-1 text-white bg-[#dd4040] rounded-4xl" onClick={() => setProjects(P1)}>Server Management (P1)</div>
                                    <div className="px-3 cursor-pointer py-1 text-white bg-[#dd4040] rounded-4xl" onClick={() => setProjects(P2)}>Payment Platform (P2)</div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <div className="z-10">
                {project !== null &&
                    <PopUpModal handleSkills={setProjects} project={project} />
                }
            </div>
        </>


    );
}


export const PopUpModal = ({ handleSkills, project }) => {

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
            <div className="flex bg-white rounded-lg shadow-lg max-w-2/3 max-h-2/3 w-full text-black overflow-hidden h-[500px]">
                {/* Left Side - Image */}
                <div className="relative w-1/3 h-full overflow-hidden">
                    <Image
                        src={project.src}
                        alt="Side profile of a cat"
                        fill
                        className={project.classstyle}
                    />
                    <div className="absolute bottom-0 m-8 p-2 pb-2.5 rounded-xl text-xs font-medium text-center text-white bg-black/30 backdrop-blur-lg">These are representative stock images intended to give viewers a quick visual idea of the project.</div>
                </div>

                {/* Right Side - Content */}
                <div className="relative w-2/3 p-6 flex flex-col justify-start">
                    <button
                        className="absolute top-2 right-2 cursor-pointer flex justify-center items-center font-[family-name:var(--font-geist-sans)] text-2xl rounded-lg w-8 h-8"
                        onClick={() => handleSkills(null)}
                    >
                        X
                    </button>
                    <div className='flex flex-row justify-between items-center'>
                        <div>
                            <div className="font-[family-name:var(--font-geist-mono)] text-xs mr-4 uppercase">{project.company}</div>
                            <div className="font-[family-name:var(--font-geist-sans)] text-2xl ">{project.name}</div>
                            <div className="font-[family-name:var(--font-geist-mono)] text-xs uppercase">{project.duration}</div>
                        </div>
                        <div>
                            <div className="font-[family-name:var(--font-geist-mono)] text-xs mr-4 uppercase">{project.location}</div>
                        </div>
                    </div>
                    <div className="mt-5 overflow-y-auto flex flex-col gap-5">

                        <div className='flex flex-row gap-2 flex-wrap'>
                            {project.stack.map((val, i) => {
                                return (<div key={i} className="bg-[#dd4040] cursor-pointer text-white rounded-3xl px-2 py-1 font-[family-name:var(--font-geist-mono)] text-xs">{val}</div>)
                            })}
                        </div>

                        <ul className="flex flex-col gap-2 list-disc list-inside">
                            {project.content.map((val, i) => {
                                return (<li key={i} className="text-sm ">{val}</li>)
                            })}

                        </ul>

                    </div>


                </div>
            </div>

        </div>

    )
}

export const P2 = {
    name: "Payment Portal for Merchant ",
    company: "Comviva Technologies Ltd. ",
    location: "Bangalore, IN",
    src: "/ppsample.webp",
    classstyle: 'object-cover scale-130',
    duration: "APRIL 2023 - SEPTEMBER 2024",
    content: [
        "Developed a scalable, responsive digital payment platform for mobiles, tablets, and browsers, enabling seam-less different transactions, bill payments, and mobile recharges, with optimized cross-platform performance.",
        "Acted as the SPOC & liaison between Ericsson’s backend team, Comviva’s development teams, & the client MTN.",
        "Designed and implemented reusable components in React.js using Figma wireframes, visualized workflows in Storybook, and ensured accurate token assignments to enhance scalability by 30%.",
        "Utilized Redux Toolkit for state management, eliminating prop drilling, and improving application performance.",
        "Diagnosed and resolved UI/UX inconsistencies, reducing critical design errors by 50%. Implemented sustainable token solutions and corrected style nesting in Figma to ensure consistency across the platform.",
        "Enhanced portal security by implementing route guards and blocking multiple sessions. Secured user authentication mechanisms in the platform's first release to ensure safe and reliable access.",
        "Optimized web performance by improving JavaScript, CSS, and React.js workflows, improving load times by 20%.",
        "Collaborated with backend teams to debug API issues & ensure smooth integration, reducing API resp. errors.",
        "Created and deployed custom hooks in React, simplifying state and lifecycle management. This approach increased code reusability and ensured greater consistency across components.",
        "Implemented responsive design principles to create seamless experiences across devices. Leveraged media queries and flexible grid layouts to optimize functionality for mobile and tablet users.",
        "Designed interactive UI flows for different regions, incorporating dynamic datasets, localized routes, and region-specific content, with languages managed through a CMS. This was catered to diverse user needs.",
        "Streamlined debugging processes with ESLint and Prettier, ensuring high-quality code and reducing review time.",
        "Proactively resolved cross-browser compatibility issues, ensuring consistent performance across browsers.",
        "Developed modular and testable code structures and conducted unit and integration testing using Jest and React Testing Library, ensuring reliable, bug-free components while reducing debugging time by 15%.",
        "Automated deployment pipelines using Git and CI/CD tools, facilitating faster and more reliable releases.",
        "Utilized Selenium with Python for testing, ensuring smooth page navigation & functionality of dynamic elements.",
        "Completed deliverables for each task comprising different flows on time, passing them on for Minimum Viable Product (MVP) Testing and User Acceptance Testing (UAT).",
        "Managed a team of 35+ members, headed scrum calls, fostering collaboration & achieving project objectives.",
        "Honored with two ACE (Appreciation for Commitment and Effort) awards for consistently meeting key project milestones with dedication and reliability.",
    ],
    stack: ["React.js", "React Native", "JavaScript", "TypeScript", "Redux", "Tailwind", "Storybook", "Node.js", "Python Selenium", "Express", "MySQL", "Firebase", "Git"]
}

export const P1 = {
    name: "Server Management Portal",
    company: "Comviva Technologies Ltd. ",
    location: "Gurgaon, IN",
    src: "/smsample.png",
    classstyle: 'object-cover',
    duration: "JUNE 2022 - APRIL 2024",
    content: [
        "Designed and developed a server management portal to streamline operations and identify performance bottlenecks, providing real-time visualization of server telemetry and health metrics.",
        "Redux Toolkit was implemented to facilitate dynamic modifications and optimize server performance.",
        "Designed and implemented filtration-based web pages, allowing users to sort and filter server stats and configurations effortlessly. This streamlined access improved resource monitoring and operational efficiency.",
        "Reverse-engineered components and wireframes from an Ext JS-based Server Management Portal, improving functionality and usability. Migrated the platform to ReactJS for a modernized user experience.",
        "Constructed reusable and modular server configurations in React.js, enabling streamlined development and reducing redundancy. This enhanced development speed & boosted reusability by 30% from the previous version.",
        "Used Python for automation testing, validating UI elements like forms, buttons, and dynamic components.",
        "Created Springboot microservices to seamlessly integrate FE - BE operations, for a smooth & scalable architecture.",
        "Optimized UI design and workflows using Bootstrap and Redux, enhancing user experience and simplifying the management of server states and configurations. These improvements boosted efficiency for end-users."
    ],
    stack: ["React.js", "JavaScript", "Bootstrap", "Redux", "HTML", "Springboot", "Java", "MySQL", "Python", "Git"]
}



// bg-[#dddddd33] backdrop-blur-md border-2 rounded-3xl p-10

