import React from 'react'

export default function ModalGrid() {

    const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit magna eget erat tempus ultrices. Sed sed mi bibendum, faucibus libero vitae, consectetur arcu. Maecenas auctor, augue non rhoncus sagittis, ex mauris posuere ante, ut feugiat elit elit in justo. "
    const projects = [eaF1Prj, waldoPrj, FreelancePrj, airportPrj, tutorPrj]

    return (
        <div className="h-screen w-screen pt-20 flex flex-col justify-center items-center gap-10 font-[family-name:var(--font-geist-sans)] overflow-x-hidden">
            <div className='flex justify-center items-center'>
                Personal Projects
            </div>
            <div className="columns-3 gap-5 max-w-10/12 mx-auto">
                {projects.map((prj, i) => (
                    <div key={i} className="break-inside-avoid mb-5">
                        <Modal
                            title={prj.name}
                            date={prj.date}
                            content={prj.content}
                            stack={prj.stack}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export const Modal = (props) => {
    return (
        <div key={props.key} className='p-5 cursor-pointer bg-gray-400/20 backdrop-blur-[2px] min-w-[300px] w-auto max-w-[420px] h-auto rounded-4xl flex flex-col justify-center items-start text-4xl'>
            <div>{props.title}</div>
            <div className='font-[family-name:var(--font-geist-mono)] text-sm font-light'>{props.date}</div>
            <div className='font-[family-name:var(--font-geist-mono)] text-sm font-medium'>{props.content}</div>
            <div className='flex flex-row gap-3 flex-wrap mt-2'>
                {props.stack.map((val, i) => {
                    return (
                        <div key={i} className='bg-[#dd3333] min-w-[40px] text-white rounded-3xl px-2 font-[family-name:var(--font-geist-mono)] text-xs'>{val}</div>
                    )
                })}
            </div>
        </div>
    )
}


export const airportPrj = {
    name: "Airport Internal Management System",
    date: "AUG 2021",
    content: "Created a website for internal airport communication, allowing real-time updates on delays, emergencies, and system statuses. Provided admin capabilities for managing flight statuses, seat bookings, and service modifications like upgrades and meal preferences.",
    stack: ["MongoDB", "JavaScript", "jQuery", "HTML/CSS"]
}

export const tutorPrj = {
    name: "Tutorly (Interactive Learning Hub)",
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
    content: "An interactive F1 car exploration website designed to provide an in-depth look at F1 car parts, their specifications, and the rich history of the sport. Users can explore detailed descriptions of car components, view specifications of various F1 cars, and delve into the Hall of Fame to learn about iconic drivers and historic achievements.",
    stack: ["Next.js", "Tailwind", "Vercel"],
    src: 'https://eaf1.vercel.app/'
}

export const waldoPrj = {
    name: "waldoPrj",
    date: "NOV 2024",
    content: "Nam vel scelerisque libero. Nunc dapibus viverra enim non pharetra. Curabitur semper enim sit amet elit imperdiet tempus. Nam vel sem eu neque faucibus pharetra ut vel justo. Nam mattis molestie turpis semper aliquet. Ut eget turpis auctor, dignissim tortor id, finibus sapien. Curabitur quis ex quam. ",
    stack: ["Next.js", "Tailwind", "Vercel"],
    src: 'https://eaf1.vercel.app/'
}

export const FreelancePrj = {
    name: "FreelancePrj",
    date: "DEC 2024 , FEB 2025",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel scelerisque libero. Nunc dapibus viverra enim non pharetra. Curabitur semper enim sit amet elit imperdiet tempus. Nam vel sem eu neque faucibus pharetra ut vel justo. Nam mattis molestie turpis semper aliquet. Ut eget turpis auctor, dignissim tortor id, finibus sapien. Curabitur quis ex quam. Aliquam luctus magna eget accumsan accumsan. Sed at suscipit mi. Fusce sodales accumsan erat et finibus. Quisque non sollicitudin diam. Curabitur iaculis dui vel orci efficitur, et semper metus aliquam. Integer blandit dui ac consectetur pharetra. Nam semper lorem risus, non congue ex fermentum eget. Nam vel scelerisque libero. Nunc dapibus viverra enim non pharetra. Curabitur semper enim sit amet elit imperdiet tempus. Nam vel sem eu neque faucibus pharetra ut vel justo. Nam mattis molestie turpis semper aliquet. Ut eget turpis auctor, dignissim tortor id, finibus sapien. Curabitur quis ex quam. Aliquam luctus magna eget accumsan accumsan. Sed at suscipit mi. Fusce sodales accumsan erat et finibus. Quisque non sollicitudin diam.",
    stack: ["Next.js", "Tailwind", "Vercel", "JavaScript", "HTML/CSS", "PHP", "phpMyAdmin", "MySQL"],
    src: 'https://eaf1.vercel.app/'
}
