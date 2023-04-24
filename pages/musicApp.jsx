import Image from 'next/image'
import React from 'react'
import musicAppImg from "../public/projects/music-app.png"
import { RiRadioButtonFill } from "react-icons/ri"
import Link from 'next/link'

const musicApp = () => {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
                <Image className='absolute z-1 object-cover' fill src={musicAppImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Music Player App</h2>
                    <h3>React JS</h3>

                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        The application, which is a fully responsive single page app, was constructed using React JS and is now being hosted on Github pages. It offers users the ability to interact with the music library, allowing them to play songs and utilize features such as play/stop, auto play, toggle progress bar, and switch between different songs.
                    </p>

                    <button className='px-8 py-2 mt-4 mr-8' onClick={() => window.open('https://mrwhite252.github.io/music-app-demo/', '_blank')}>Demo</button>
                    <button className='px-8 py-2 mt-4 mr-8' onClick={() => window.open('https://mrwhite252.github.io/music-app-demo/', '_blank')}>Code</button>

                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' />React</p>
                        </div>
                    </div>
                </div>

                <Link href='/#project'>
                    <p className='underline cursor-pointer'>Back</p>
                </Link>
            </div>
        </div>
    )
}

export default musicApp