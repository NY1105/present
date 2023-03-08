import { Project, Projects } from '@/utils/types'
import React from 'react'
import ProjectContainer from './ProjectContainer'

const RenderProjects = ({ projects }: Projects) => {
	return (
		<div className="flex-1 m-1 py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
			<div className="text-2xl px-1 py-2">Projects</div>
			<div className="pb-3 overflow-auto ">
				{projects.map((project: Project) => (
					<ProjectContainer
						key={`${project}-${project.id}`}
						id={project.id}
						title={project.title}
						description={project.description}
						url={project.url}
						image={project.image}
					/>
				))}
			</div>
		</div>
	)
}

export default RenderProjects
