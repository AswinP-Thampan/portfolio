"use client"

import { useRouter } from "next/navigation";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Home() {

  const titles = [
    "Full Stack Developer",
    "Frontend Enthusiast",
    "React Wizard",
    "UI/UX Designer",
    "Backend Explorer",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [newName, setNewName] = useState(titles[0]);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % titles.length;
        setNewName(titles[nextIndex]);
        return nextIndex;
      });
    }, 3000);

    setNewName(titles[0]);

    return () => clearInterval(intervalID);
  }, []);



  return (
    <div className="h-screen w-screen flex justify-center items-center font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <MotionDock isTop={true} />
        <span className="inline-block text-[100px] mt-3 md:mt-0 md:text-[200px] text-black leading-none">
          ASWIN P<span className="text-red-500">.</span>
        </span>
        <span>
          <TypingAnimation className="inline-block text-[30px] md:text-[50px] tracking-wide text-black leading-none">{newName}</TypingAnimation>
        </span>
      </div>
    </div>

  );
}

export const MotionDock = ({ isTop }) => {
  return (
    <motion.div
      key={isTop ? "from-bottom" : "from-top"}
      initial={isTop ? { y: "-40vh", opacity: "0" } : { y: "0", opacity: "0" }}
      animate={{ y: isTop ? "-80px" : "0vh", opacity: 1 }}
      transition={{ duration: isTop ? 1 : 0.6, ease: "easeInOut" }}
      className="absolute left-1/2 transform -translate-x-1/2"
    >
      <DockDemo />
    </motion.div>
  );
}

export const Seperator = () => {
  return (
    <div className="bg-[#cccccc] mx-2 min-h-10 max-h-10 min-w-0.25 max-w-0.25" />
  )
}

export const DockDemo = () => {

  const router = useRouter();

  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon onClick={() => { router.push("/") }}>
          <Icons.home className="size-6" />
        </DockIcon>
        <DockIcon onClick={() => { router.push("/profile") }}>
          <Icons.profile className="size-6" />
        </DockIcon>
        <DockIcon onClick={() => { router.push("/projects") }}>
          <Icons.projects className="size-6" />
        </DockIcon>
        <Seperator />
        <DockIcon onClick={() => { router.push("/contacts") }}>
          <Icons.conatct className="size-6" />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  home: (props) => (
    <svg viewBox="0 0 24 24" width="50" height="50">
      <path
        fill="#333333"
        d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z"
      />
    </svg>
  ),
  projects: (props) => (
    <svg viewBox="0 0 24 24" width="50" height="50">
      <path
        fill="#333333"
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM9.94 13.27C9.26 14.29 8.32 15.12 7.22 15.67C7.12 15.72 7 15.75 6.89 15.75C6.61 15.75 6.35 15.6 6.22 15.34C6.03 14.97 6.18 14.52 6.56 14.33C7.43 13.9 8.17 13.24 8.7 12.44C8.88 12.17 8.88 11.83 8.7 11.56C8.16 10.76 7.42 10.1 6.56 9.67C6.18 9.49 6.03 9.04 6.22 8.66C6.4 8.29 6.85 8.14 7.22 8.33C8.32 8.88 9.26 9.71 9.94 10.73C10.46 11.5 10.46 12.5 9.94 13.27ZM17 15.75H13C12.59 15.75 12.25 15.41 12.25 15C12.25 14.59 12.59 14.25 13 14.25H17C17.41 14.25 17.75 14.59 17.75 15C17.75 15.41 17.41 15.75 17 15.75Z"
      />
    </svg>
  ),
  profile: (props) => (
    <svg className="p-[2.5px]" viewBox="-32 0 512 512" width="50" height="50">
      <path
        fill="#333333"
        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
      />
    </svg>
  ),
  conatct: (props) => (
    <svg viewBox="1 0 22 24" width="40" height="40">
      <path
        fill="#333333"
        d="M19.75,4 C20.9926407,4 22,5.00735931 22,6.25 L22,17.754591 C22,18.9972317 20.9926407,20.004591 19.75,20.004591 L4.25,20.004591 C3.00735931,20.004591 2,18.9972317 2,17.754591 L2,6.25 C2,5.00735931 3.00735931,4 4.25,4 L19.75,4 Z M9.75,12.5 L6.25,12.5 C5.87030423,12.5 5.55650904,12.7821539 5.50684662,13.1482294 L5.5,13.25 L5.5,13.7417575 L5.50787101,13.8501298 C5.67047899,14.9636623 6.60213369,15.5009403 7.99995063,15.5009403 C9.33111595,15.5009403 10.2395313,15.0141183 10.4636506,14.0063541 L10.4921036,13.8512782 L10.5,13.7427321 L10.5,13.25 C10.5,12.8703042 10.2178461,12.556509 9.85177056,12.5068466 L9.75,12.5 Z M17.75,12.9961404 L13.2522936,12.9961404 L13.150523,13.002987 C12.7844475,13.0526495 12.5022936,13.3664447 12.5022936,13.7461404 C12.5022936,14.1258362 12.7844475,14.4396314 13.150523,14.4892938 L13.2522936,14.4961404 L17.75,14.4961404 L17.8517706,14.4892938 C18.2178461,14.4396314 18.5,14.1258362 18.5,13.7461404 C18.5,13.3664447 18.2178461,13.0526495 17.8517706,13.002987 L17.75,12.9961404 Z M8,8.50218109 C7.17158707,8.50218109 6.5000257,9.17374246 6.5000257,10.0021554 C6.5000257,10.8305683 7.17158707,11.5021297 8,11.5021297 C8.82841293,11.5021297 9.4999743,10.8305683 9.4999743,10.0021554 C9.4999743,9.17374246 8.82841293,8.50218109 8,8.50218109 Z M17.75,9.5 L13.2522936,9.5 L13.150523,9.50684662 C12.7844475,9.55650904 12.5022936,9.87030423 12.5022936,10.25 C12.5022936,10.6296958 12.7844475,10.943491 13.150523,10.9931534 L13.2522936,11 L17.75,11 L17.8517706,10.9931534 C18.2178461,10.943491 18.5,10.6296958 18.5,10.25 C18.5,9.87030423 18.2178461,9.55650904 17.8517706,9.50684662 L17.75,9.5 Z"
      />
    </svg>

  )
};
