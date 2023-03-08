import React, { useState } from 'react'
import Tools from '@/data/tools.json'

const RenderAbout = () => {
	// const [tools, setTools] = useState([
	// 	{
	// 		_id: '',
	// 		appName: '',
	// 		appProviderName: '',
	// 		appDescription: '',
	// 		appOfficialSiteURL: '',
	// 		appLogo: '',
	// 		appTags: [],
	// 		nSaved: 0,
	// 		createdBy: '',
	// 		createdAt: '',
	// 		updatedAt: '',
	// 	},
	// ])
	// fetch('https://api.nicholasyan.site/api/tools')
	// 	.then((res) => res.json())
	// 	.then((json) => {
	// 		setTools(json)
	// 	})
	const tools = Tools
	return (
		<div className="m-1 py-3 px-5 rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
			<div className="text-2xl px-1 py-2">About</div>

			<div className="flex justify-center flex-col">
				<div className="pb-3 px-4 flex flex-col ">
					<p className="text-sm">Here are the frameworks and tools I used writing this website</p>
				</div>
				<div className="pb-3 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 justify-center items-stretch">
					{tools &&
						tools.map((tool) => (
							<div
								className="dark:bg-gray-300 rounded-2xl border-2 m-1 p-2 border-gray-300 dark:border-gray-800 pb-3 flex flex-col justify-center"
								key={tool.appName}
							>
								<div className=" flex justify-center my-1 py-1 ">
									<div className="mr-2 p-1">
										<img
											src={tool.appLogo}
											alt="cityu"
											className="h-12 md:h-20 hover:cursor-pointer"
											onClick={() => window.open(tool.appOfficialSiteURL)}
										></img>
									</div>
									{/* <div className=" flex flex-col justify-center mx-1 grow overflow-hidden ">
										<p className="font-semibold md:text-lg lg:text-xl">
											<Link href={tool.appOfficialSiteURL}>
												{tool.appName}
											</Link>
										</p>
										<div className="flex max-h-6">
											<Link
												className="hidden sm:block text-gray-900 text-sm h-4 underline md:text-md lg:text-lg dark:text-gray-100"
												href={tool.appOfficialSiteURL}
											>
												{tool.appOfficialSiteURL}
											</Link>
										</div>
									</div> */}
								</div>
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default RenderAbout
