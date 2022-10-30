import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { useTypewriter, Cursor } from "react-simple-typewriter"
import { HiOutlineChevronDoubleDown } from 'react-icons/hi'
import Link from 'next/link'

const Main = () => {

    const [text] = useTypewriter({
        words: ["UI/UX Designer", "Front End Developer"],
        loop: 0,
    });

    return (
        <div id='home' className='w-full h-screen'>
            <div className='max-w-[1024px] w-full h-full p-2 mx-auto flex items-center'>
                <div className='mx-auto'>
                    <p className='uppercase text-sm tracking-widest text-gray-600 text-center'>let&apos;s building something together</p>
                    <h1 className="py-4 text-gray-700 text-center">
                        Hi, I&apos;m <span className='text-[#fc801b]'>David Bai</span>
                    </h1>
                    <h1 className='py-2 text-gray-700 ml-16'>
                        A Dynamic <span>{text}</span>
                        <Cursor />
                    </h1>
                    <p className='py-4 text-gray-600 max-w-[70%] m-auto'>
                        I am a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I&apos;m focused on building responsive front-end web applications
                        while learning back-end technologies.
                    </p>
                    <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaLinkedinIn />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <FaGithub />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <AiOutlineMail />
                        </div>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                            < BsFillPersonLinesFill />
                        </div>
                    </div>
                </div>
            </div>

            <Link href='/#about' className='arrow'>
                <HiOutlineChevronDoubleDown size={50} />
            </Link>

        </div>
    )
}

export default Main