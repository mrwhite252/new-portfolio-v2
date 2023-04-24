import React from 'react'

import MusicAppImg from '../public/projects/music-app.png'
import BudgetAppImg from '../public/projects/budget-planner.png'
import TempoMakerImg from '../public/projects/tempo-maker.png'
import ChatAppImg from '../public/projects/online-chat.png'
import ProjectItem from './ProjectItem'

const Project = () => {
    return (
        <div id='project' className='w-full bg-[#fc801b]'>

            <div className='max-w-[1240px] mx-auto px-2 py-32 h-full'>

                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
                <h2>What I&apos;ve built</h2>
                <div className='grid md:grid-cols-2 gap-8'>
                    <ProjectItem title='Music Player' backgroundImg={MusicAppImg} projectUrl='/musicApp' />
                    <ProjectItem title='Tempo Maker' backgroundImg={TempoMakerImg} projectUrl='/tempoMaker' />
                    <ProjectItem title='Budget Planner' backgroundImg={BudgetAppImg} projectUrl='/bugetPlanner' />
                    <ProjectItem title='Online Chat App' backgroundImg={ChatAppImg} projectUrl='/chatApp' />


                </div>
            </div>
        </div>
    )
}

export default Project