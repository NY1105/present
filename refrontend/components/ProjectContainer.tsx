import { Project } from '@/utils/types'

export default (props: Project) => {
	const { id, title, description, url, image } = props
	return (
		<div className=" flex py-1 sm:px-2 my-1 rounded-md border-2 border-gray-200 bg-gray-200 hover:border-gray-300 hover:bg-gray-300 dark:hover:border-gray-800 dark:hover:bg-gray-800 dark:border-gray-900 dark:bg-gray-900">
			<div className="flex flex-col justify-center h-10 dark:bg-gray-300 rounded-lg ">
				<img src={image} alt="icon" className=" w-10  p-1"></img>
			</div>
			<div className="flex-1 flex flex-col mx-4 justify-center">
				<p className="hidden">{id}</p>
				<p className="text-lg font-semibold sm:text-xl md:pt-1">{title}</p>
				<div className="hidden lg:block text-base ml-6">
					{description.map((line) => (
						<div key={line}>{line}</div>
					))}
				</div>
				<p className="hidden text-base">{url}</p>
			</div>
		</div>
	)
}
