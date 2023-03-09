import React from 'react'
import ProjectsContainer from '@/components/ProjectsContainer'

const Projects = () => {
	return (
		<div className="flex-1 m-1 py-2 px-4 rounded-md border-2 border-gray-400 bg-gray-200 dark:border-gray-700 dark:bg-gray-900">
			<div className="text-2xl px-1 py-2">Projects</div>
			<ProjectsContainer  />
		</div>
	)
}

export default Projects
