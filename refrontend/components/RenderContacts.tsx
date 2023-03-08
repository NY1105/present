import Link from 'next/link'
import React from 'react'

const RenderContact = () => {
	const contacts = [
		{
			label: 'LinkedIn',
			url: 'https://www.linkedin.com/in/nicholasyanwaiyin/',
			image: '/linkedin.png',
		},
		{
			label: 'Github',
			url: 'https://github.com/NY1105/',
			image: '/github.png',
		},
		{
			label: 'Email',
			url: 'https://yanwaiyin1105@gmail.com',
			image: '/gmail.png',
		},
	]
	const [copying, setCopying] = React.useState('')
	return (
		<div className="m-1 py-3 px-5 rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
			<div className="text-2xl px-1 py-2">Contacts</div>
			<div className="flex justify-center">
				<div className="pb-3 flex flex-col justify-center ">
					{contacts.map((contact) => (
						<div
							className="border-b-2 border-gray-300 dark:border-gray-800 pb-3 flex flex-col justify-center"
							key={contact.label}
						>
							<div className=" flex justify-center my-1 py-1 ">
								<div className="mr-2 p-1">
									<img
										src={contact.image}
										alt="cityu"
										className="w-12 md:w-20 hover:cursor-pointer bg-white rounded-xl"
										onClick={() => window.open(contact.url)}
									></img>
								</div>
								<div className=" flex flex-col justify-center mx-1 grow overflow-hidden ">
									<p className="font-semibold md:text-lg lg:text-xl">
										<Link href={contact.url}>{contact.label}</Link>
									</p>
									<div className="flex max-h-6">
										<Link
											className="hidden sm:block text-gray-900 text-sm h-4 underline md:text-md lg:text-lg dark:text-gray-100"
											href={contact.url}
										>
											{contact.url}
										</Link>

										<img
											className={
												contact.label == copying
													? 'hidden sm:block w-6 m-0 ml-2 rounded-md p-1 bg-gray-200 dark:bg-gray-500 hover:bg-green-300 dark:hover:bg-green-800 hover:cursor-pointer'
													: 'hidden sm:block w-6 m-0 ml-2 rounded-md p-1 bg-gray-200 dark:bg-gray-500 hover:bg-gray-300 dark:hover:bg-gray-800 hover:cursor-pointer'
											}
											src="./copy.svg"
											onClick={() => {
												navigator.clipboard.writeText(contact.url)
												setCopying(contact.label)
											}}
										/>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default RenderContact
