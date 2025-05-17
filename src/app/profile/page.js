"use client"

import { MotionDock } from "../page";


export default function Profile() {

    return (
        <div className="h-screen w-screen flex flex-col font-[family-name:var(--font-geist-sans)]">
            <MotionDock isTop={false} />
            <div className="flex flex-col items-center">
                {/* <span className="text-black">Hi There</span> */}
            </div>
        </div>

    );
}


