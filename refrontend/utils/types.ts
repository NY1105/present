export type Project = {
	id: number
	title: string
	description: string
	url: string
}

export type Projects = { projects: Project[] }

export type Message = {
	message: string
}
