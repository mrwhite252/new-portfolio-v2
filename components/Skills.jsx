import Image from 'next/image'
import React from 'react'
import Html from '../public/skills/html.png'
import Css from '../public/skills/css.png'
import Javascript from '../public/skills/javascript.png'
import ReactImg from '../public/skills/react.png'
import Tailwind from '../public/skills/tailwind.png'
import Firebase from '../public/skills/firebase.png'
import NextJS from '../public/skills/nextjs.png'
import Vue from '../public/skills/Vue.png'
import NuxtJS from "../public/skills/nuxt.png"
import Node from "../public/skills/node.png"
import TypeScript from "../public/skills/Typescript_logo.png"
import MongoDB from "../public/skills/mongo.png"

const Skills = () => {


    const contents = [
        { id: 1, src: Html, name: 'HTML' },
        { id: 2, src: Css, name: 'CSS' },
        { id: 3, src: Javascript, name: 'JavaScript' },
        { id: 4, src: TypeScript, name: 'TypeScript' },
        { id: 5, src: Node, name: 'Node' },
        { id: 6, src: ReactImg, name: 'React' },
        { id: 7, src: NextJS, name: 'Next' },
        { id: 8, src: Vue, name: 'Vue' },
        { id: 9, src: NuxtJS, name: 'Nuxt' },
        { id: 10, src: Tailwind, name: 'Tailwind' },
        { id: 11, src: Firebase, name: 'Firebase' },
        { id: 12, src: MongoDB, name: 'MongoDB' },
    ]



    return (
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>

                    {contents.map((content) => (
                        <div key={content.id} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                            <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                                <div className="m-auto">
                                    <Image src={content.src} width='64' height='64' alt='/' />
                                </div>
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>{content.name}</h3>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    )
}

export default Skills