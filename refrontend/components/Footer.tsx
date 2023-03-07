import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Footer = () => {
	let router = useRouter()
	const buttons = [
		{
			label: 'LinkedIn',
			link: 'https://www.linkedin.com/in/nicholasyanwaiyin/',
		},
		{ label: 'Github', link: 'https://github.com/NY1105/present' },
		{ label: 'Contact', link: '/contact' },
	]
	return (
		<div className="px-6 sm:px-12 md:px-16 lg:px-20 py-4 fixed w-full z-20 justify-center sm:justify-start flex border-t-2 border-gray-400 dark:border-gray-700 dark:bg-gray-800 bg-white dark:text-white text-black items-center">
			<div className=" flex justify-middle sm:grow sm:justify-end ">
				{buttons.map((button) => (
					<div
						key={button.label}
						className="mx-1 px-3 py-2 text-sm sm:underline decoration-1 rounded-md  "
					>
						<Link href={button.link} className="hover:cursor-pointer">
							{button.label}
						</Link>
					</div>
				))}
			</div>
		</div>
	)
}

export default Footer
