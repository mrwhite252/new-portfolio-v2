import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import MusicAppImg from '../public/projects/music-app.png'
import ProjectItem from './ProjectItem'

const Project = () => {
    return (
        <div className='w-full'>

            <div className='max-w-[1240px] mx-auto px-2 py-16'>

                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
                <h2>What I've built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem title='Music Player' backgroundImg={MusicAppImg} projectUrl='/musicApp' />
                    <ProjectItem title='Music Player' backgroundImg={MusicAppImg} projectUrl='/musicApp' />
                    <ProjectItem title='Music Player' backgroundImg={MusicAppImg} projectUrl='/musicApp' />
                    <ProjectItem title='Music Player' backgroundImg={MusicAppImg} projectUrl='/musicApp' />

                </div>
            </div>
        </div>
    )
}

export default Project