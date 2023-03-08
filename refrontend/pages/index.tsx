import ProjectData from '@/data/projects.json'
import RenderProjects from '@/components/RenderProjects'
import RenderIntro from '@/components/RenderIntro'
import RenderEducation from '@/components/RenderEducation'
import RenderExperience from '@/components/RenderExperience'

export default function Home() {
	const projects = ProjectData.projects
	return (
		<div className="my-4 py-4 ">
			<div className="md:flex">
				<RenderIntro />
				<RenderProjects projects={projects} />
			</div>
			<div className="">
				<div className="sm:grid sm:grid-cols-2">
					<RenderExperience />
					<RenderEducation />
				</div>
			</div>
		</div>
	)
}
