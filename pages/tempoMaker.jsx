// import Image from 'next/image'
import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri"
import tempoMakerImg from '../public/projects/tempo-maker.png'
import Link from 'next/link'
import Image from 'next/image'

function tempoMaker() {
    return (
        <div className='w-full'>
            <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
                <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10' />
                <Image className='absolute z-1 object-cover' fill src={tempoMakerImg} alt='/' />
                <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
                    <h2 className='py-2'>Tempo Maker App</h2>
                    <h3>Vanilla JavaScript</h3>

                </div>
            </div>

            <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
                <div className='col-span-4'>
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>
                        The application is an experimental project built with Vanilla JavaScript. It assists users in selecting the appropriate tempo and combination for the desired percussion instruments. Users can select a tempo range from 20 to 300, and each percussion instrument has three different genres to choose from.
                    </p>

                    <button className='px-8 py-2 mt-4 mr-8' onClick={() => window.open('https://mrwhite252.github.io/beat-maker/', '_blank')}>Demo</button>
                    <button className='px-8 py-2 mt-4 mr-8' onClick={() => window.open('https://github.com/mrwhite252/beat-maker/', '_blank')}>Code</button>

                </div>

                <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
                    <div className='p-2'>
                        <p className='text-center font-bold pb-2'>Technologies</p>
                        <div className='grid grid-cols-3 md:grid-cols-1'>
                            <p className='text-gray-600 py-2 flex items-center'> <RiRadioButtonFill className='pr-1' /> Vanilla JavaScript</p>
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

export default tempoMaker