import React from 'react'

const RenderIntro = () => {
	return (
		<div className="m-1 py-3  px-5 flex flex-col justify-center  rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
			<div className="pb-5 flex flex-col align-middle ">
				<p className="text-2xl">Hi there</p>
				<br />
				<p className="text-4xl">
					I'm <span className="font-semibold">Nicholas</span>
				</p>
				<br />
				<p className="lg:text-lg">Nice to meet you</p>
				<p className="lg:text-lg">Here are some coding projects I have done</p>
				<p className="lg:text-lg">Feel free to take a tour!</p>
			</div>
		</div>
	)
}

export default RenderIntro
