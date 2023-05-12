import data from "../frontend_projects"
import {
	Project,
	LinkToProject,
	ProjectSection,
	ProjectsTitle,
	ProjectSvg,
} from "./styles/ProjectSectionStyles"

function FrontendProjects() {
	const projects = data.map((project) => {
		return (
			<Project
				key={project.name}
				start={project.id % 2 === 0 ? "flex-start" : "flex-end"}>
				<LinkToProject href={project.link} target='_blank'>
					{project.name}

					{project.icon && <ProjectSvg src={project.icon} alt='' />}
				</LinkToProject>
			</Project>
		)
	})
	return (
		<ProjectSection>
			<ProjectsTitle>Frontend Projects</ProjectsTitle>
			{projects}
		</ProjectSection>
	)
}

export default FrontendProjects
