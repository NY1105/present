import Link from 'next/link'
import React from 'react'

const RenderEducation = () => {
	return (
		<div className="m-1 py-3 px-5 rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
			<div className="text-2xl px-1 py-2">Education</div>
			<div className="pb-3 flex justify-center ">
				<div className=" flex justify-center ">
					<div className="mr-2 p-1">
						<img
							src="/cityu.svg"
							alt="cityu"
							className="h-12 md:h-20 hover:cursor-pointer"
							onClick={() => window.open('https://www.cs.cityu.edu.hk/')}
						></img>
					</div>
					<div className="flex-1 flex flex-col justify-center mx-1 grow">
						<Link
							href="https://www.cs.cityu.edu.hk/"
							className="font-semibold md:text-lg lg:text-xl hover:cursor-pointer"
						>
							BSc in Computer Science
						</Link>
						<Link
							href="https://www.cityu.edu.hk/"
							className="text-gray-900 text-sm md:text-md lg:text-lg dark:text-gray-100 hover:cursor-pointer"
						>
							City University of Hong Kong
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RenderEducation
