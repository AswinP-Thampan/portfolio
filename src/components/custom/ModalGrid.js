import React from 'react'
import { motion } from "framer-motion";

export default function ModalGrid() {

    const projects = [eaF1Prj, waldoPrj, FreelancePrj, FreelancePrj2, airportPrj, tutorPrj]

    const reveal = (i) => ({
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut", delay: (i + 1) * 0.2 },
        },
    });

    return (
        <div className="h-screen w-screen flex flex-col justify-start md:justify-center items-center gap-10 font-[family-name:var(--font-geist-sans)] ">
            <div className='flex mt-30 lg:mt-0 justify-center items-center text-5xl lg:text-6xl'>
                Personal Projects
            </div>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                {projects.map((prj, i) => (
                    <motion.div
                        variants={reveal(i)}
                        initial="hidden"
                        animate="visible"
                        key={i}
                        className="break-inside-avoid mb-5">
                        <Modal
                            title={prj.name}
                            date={prj.date}
                            content={prj.content}
                            stack={prj.stack}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export const Modal = (props) => {

    console.log(typeof (props.content) == Object ? true : false)

    return (
        <div key={props.key} className='p-5 cursor-pointer bg-gray-400/20 backdrop-blur-[2px] min-w-[300px] w-auto max-w-[420px] h-auto rounded-4xl flex flex-col justify-center items-start text-3xl md:text-4xl'>
            <div>{props.title}</div>
            <div className='font-[family-name:var(--font-geist-mono)] text-sm font-light'>{props.date}</div>
            {/* {Array.isArray(props.content) && (
                <ul className='flex flex-col gap-2 list-disc list-inside my-2'>
                    {props.content.map((val, i) => (
                        <li key={i} className="font-[family-name:var(--font-geist-mono)] text-sm font-medium">
                            {val}
                        </li>
                    ))}
                </ul>
            )} */}
            {!Array.isArray(props.content) &&
                <div className='font-[family-name:var(--font-geist-mono)] text-sm font-medium my-2'>{props.content}</div>
            }
            <div className='flex flex-row gap-3 flex-wrap mt-2'>
                {props.stack.map((val, i) => {
                    return (
                        <div key={i} className='bg-[#dd3333] text-white rounded-3xl px-2 py-0.5 font-[family-name:var(--font-geist-mono)] text-xs'>{val}</div>
                    )
                })}
            </div>
        </div>
    )
}


export const airportPrj = {
    name: "Internal Airport Mgmt. System",
    date: "AUG 2021",
    content: "Created a website for internal airport communication, allowing real-time updates on delays, emergencies, and system statuses. Provided admin capabilities for managing flight statuses, seat bookings, and service modifications like upgrades and meal preferences.",
    stack: ["MongoDB", "JavaScript", "jQuery", "HTML/CSS"]
}

export const tutorPrj = {
    name: "Tutorly (Learning Hub)",
    date: "DEC 2021",
    content: "­­Developed a dynamic web platform to cater to the growing demand for online learning by connecting alumni and students. The website aimed to enhance students' industry insights and learning opportunities.	Implemented user registration features for both tutors and students, ensuring a personalized experience. ",
    stack: ["React.js", "JavaScript", "HTML/CSS", "jQuery", "MySQL"]
}

export const bankPrj = {
    name: "Banking Service Flow",
    date: "AUG 2020",
    content: "",
    stack: ["JavaScript", "HTML/CSS", "PHP", "phpMyAdmin", "MySQL"]
}

export const eaF1Prj = {
    name: "eaf1 (Everything About F1)",
    date: "OCT 2024",
    content: "An interactive F1 car exploration website designed to provide an in-depth look at F1 car parts, their specs, and the rich history of the sport. Users can explore detailed descriptions of car components, view specifications of various F1 cars, and delve into the Hall of Fame too.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    src: 'https://eaf1.vercel.app/'
}

export const waldoPrj = {
    name: "Find My Waldo",
    date: "NOV 2024",
    content: "Browser-based game where players navigate through a cluttered webpage to find the iconic character, Waldo. The webpage features a 'spotlight cursor' effect, illuminating only a small portion of the screen as users hover their mouse, adding a layer of challenge and excitement.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    src: 'https://eaf1.vercel.app/'
}

export const FreelancePrj = {
    name: "Pizza Shop (Freelancing)",
    date: " FEB 2025",
    content: "Developed a fully responsive website for a pizza shop, enhancing online presence with an intuitive UI and seamless navigation. Managed the project while collaborating with clients to refine concepts, meet design expectations, and ensure timely delivery.",
    stack: ["Next.js", "Tailwind", "Vercel", "JavaScript", "Redux", "Git", "Figma"],
    src: 'https://eaf1.vercel.app/'
}

export const FreelancePrj2 = {
    name: "Logo Designer (Freelancing)",
    date: "DEC 2024",
    content: "Designed a unique logo for a marble company, capturing its brand identity with a sleek and modern aesthetic. Focused on sleek aesthetics to reflect the premium nature of the product.",
    stack: ["Illustrator", "Procreate", "Hand Drawn"],
    src: 'https://eaf1.vercel.app/'
}
