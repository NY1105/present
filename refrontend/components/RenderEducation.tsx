import React from 'react'

const RenderEducation = () => {
	return (
		<div className="m-1 py-3 px-5 rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
			<div className="text-2xl px-1 py-2">Education</div>
			<div className="pb-3 flex justify-center ">
				<div className=" flex justify-center ">
					<div className="mr-2 p-1">
						<img src="/cityu.svg" alt="cityu" className="h-12 md:h-20"></img>
					</div>
					<div className="flex-1 flex flex-col justify-center mx-1 grow">
						<p className="font-semibold md:text-lg lg:text-xl">
							BSc in Computer Science
						</p>
						<p className="text-gray-900 text-sm md:text-md lg:text-lg dark:text-gray-100">
							City University of Hong Kong
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RenderEducation
