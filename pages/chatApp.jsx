import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import onlineChatImg from '../public/projects/online-chat.png';
import Link from 'next/link';
import Image from 'next/image';

function chatApp() {
	return (
		<div className="w-full">
			<div className="w-screen h-[30vh] lg:h-[40vh] relative">
				<div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/70 z-10" />
				<Image
					className="absolute z-1 object-cover"
					fill
					src={onlineChatImg}
					alt="/"
				/>
				<div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
					<h2 className="py-2">Online Chat App</h2>
					<h3>Vue.js, Firebase authentication, database and hosting</h3>
				</div>
			</div>

			<div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
				<div className="col-span-4">
					<p>Project</p>
					<h2>Overview</h2>
					<p>
						This application was created using Vue.js. It uses the
						authentication, database, and hosting services from Firebase. Users
						can register, login, and send instant messages to others through
						this app.
					</p>
					<button
						className="px-8 py-2 mt-4 mr-8"
						onClick={() =>
							window.open(
								'https://my-full-stack-projects.web.app/chatroom/',
								'_blank'
							)
						}
					>
						Demo
					</button>
					<button
						className="px-8 py-2 mt-4 mr-8"
						onClick={() =>
							window.open(
								'https://github.com/mrwhite252/live-chat-app-vue-and-firebase/',
								'_blank'
							)
						}
					>
						Code
					</button>
				</div>

				<div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
					<div className="p-2">
						<p className="text-center font-bold pb-2">Technologies</p>
						<div className="grid grid-cols-3 md:grid-cols-1">
							<p className="text-gray-600 py-2 flex items-center">
								{' '}
								<RiRadioButtonFill className="pr-1" />
								Vue.js
							</p>
							<p className="text-gray-600 py-2 flex items-center whitespace-nowrap">
								{' '}
								<RiRadioButtonFill className="pr-1" />
								Firebase auth
							</p>
							<p className="text-gray-600 py-2 flex items-center">
								{' '}
								<RiRadioButtonFill className="pr-1" />
								Firebase database
							</p>
						</div>
					</div>
				</div>

				<Link href="/#project">
					<p className="underline cursor-pointer">Back</p>
				</Link>
			</div>
		</div>
	);
}

export default chatApp;
