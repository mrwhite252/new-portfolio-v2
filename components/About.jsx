import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Aboutme from '../public/assets/1778440.JPEG'

const About = () => {


    return (
        <div id='about' className='w-full md:h-screen p-2 flex items-center py-16 bg-[#0096b0]'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                    <p className='uppercase text-xl tracking-widest text-[#fc801b]'>About</p>
                    <h2>Who I am</h2>
                    <p className='py-2 text-gray-800'>I am a front-end web developer with several years of digital design & front-end development experience for customers both within NZ and beyond.
                    </p>
                    <p className='py-2 text-gray-800'>
                        I am skilled in Adobe Creative Suites, Figma, HTML5, CSS3, JavaScript, and modern frameworks such as React.js(Next.js) and Vue.js(Nuxt.js), and understanding AWS, MongoDB, and firebase.
                    </p>
                    <p className='py-2 text-gray-800'>
                        I believe that being a great developer is not using one specific language, but choosing the best tool for the job.
                    </p>
                    <p className='py-2 text-gray-800'>
                        I am a self-motivated learner. I am learning Java, and Python while working, and looking for an opportunity to become a fullstack developer.
                    </p>
                    <Link href="/#skills">
                        <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects</p>
                    </Link>
                </div>
                <div className='w-full h-auto m-auto shadow-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    <Image src={Aboutme} className='rounded-xl' alt='/' />
                </div>
            </div>
        </div>
    )
}

export default About