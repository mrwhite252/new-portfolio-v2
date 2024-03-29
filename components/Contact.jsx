import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import ContactImg from '../public/shake.svg'

const Contact = () => {
    return (
        <div id='contact' className='w-full lg:h-screen'>
            <div className="m-auto max-w-[1240px] px-2 pt-16 w-full lg:h-screen">
                <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>

                    {/* left */}
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full rounded-xl'>
                            <div>
                                <Image src={ContactImg} alt='/' />
                            </div>
                            <div>
                                <h2>David Bai</h2>
                                <p>Front-End Developer</p>
                                <p>I am looking for full-time positions. Contact me and let	&#145;s talk.</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between py-4'>
                                    <a href="https://www.linkedin.com/in/david-bai-chch/" target='_blank' rel="noreferrer">
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <FaLinkedinIn />
                                        </div>
                                    </a>

                                    <a href="https://github.com/mrwhite252?tab=repositories" target='_blank' rel="noreferrer">
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <FaGithub />
                                        </div>
                                    </a>

                                    <a href="mailto:baiminghan@email.com" target="_blank" rel="noopener noreferrer">
                                        <div className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                                            <AiOutlineMail />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}

                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-1'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                    <div className='flex flex-col'>
                                        <label className='uppercase text-sm py-1'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                    </div>
                                </div>

                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-1'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-1'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-1'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 flex border-gray-300' rows='5'></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp className='m-auto' size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact