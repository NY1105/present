import Link from 'next/link'
import React from 'react'

const RenderExperience = () => {
	return (
		<div className="m-1 py-3 px-5 rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
			<div className="text-2xl px-1 py-2">Experience</div>
			<div className="pb-3 flex justify-center ">
				<div className=" flex justify-center ">
					<div className="mr-2 p-1">
						<img
							src="/ff.png"
							alt="cityu"
							className="h-12 md:h-20 hover:cursor-pointer"
							onClick={() => window.open('https://forexforest.net/')}
						></img>
					</div>
					<div className="flex-1 flex flex-col justify-center mx-1 grow">
						<p className="font-semibold md:text-lg lg:text-xl">
							Junior Software Developer
						</p>
						<Link
							href="https://forexforest.net/"
							className="text-gray-900 text-sm md:text-md lg:text-lg dark:text-gray-100 hover:cursor-pointer"
						>
							Forex Forest Algorithmic Trading
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RenderExperience
