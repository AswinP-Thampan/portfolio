import React from 'react'

export default function ModalGrid() {

    const dummyText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus hendrerit magna eget erat tempus ultrices. Sed sed mi bibendum, faucibus libero vitae, consectetur arcu. Maecenas auctor, augue non rhoncus sagittis, ex mauris posuere ante, ut feugiat elit elit in justo. "
    return (
        <div className='grid grid-cols-3 gap-5 max-w-10/12'>
            {[1, 2, 3, 4, 5, 6].map((i) => {
                return (
                    <Modal key={i} title={"Title of the Project"} date={"ASD 202X - QWE 202X"} content={dummyText} stack={[1, 2, 3, 4, 5, 6]} />
                )
            })}
        </div>
    )
}

export const Modal = (props) => {
    return (
        <div key={props.key} className='p-5 cursor-pointer bg-gray-400/20 backdrop-blur-[2px] min-h-[200px] min-w-[300px] w-auto max-w-[420px] h-auto rounded-4xl flex flex-col justify-center items-start text-4xl'>
            <div>{props.title}</div>
            <div className='font-[family-name:var(--font-geist-mono)] text-sm font-light'>{props.date}</div>
            <div className='font-[family-name:var(--font-geist-mono)] text-sm font-medium'>{props.content}</div>
            <div className='flex flex-row gap-3 flex-wrap mt-2'>
                {[1, 2, 3, 4, 5, 6].map((i) => {
                    return (
                        <div key={i} className='bg-[#dd3333] min-w-[40px] text-white rounded-3xl px-2 font-[family-name:var(--font-geist-mono)] text-xs'>#{i} sdv</div>
                    )
                })}
            </div>
        </div>
    )
}
