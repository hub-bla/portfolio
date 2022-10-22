import { Section, SectionTitle } from "./SectionStyle"
import styled from "styled-components"
import data from "../carouseldata"

const ProjectSection = styled(Section)`
	flex-direction: column;
	background-color: #0d1423;
	@media (max-width: 1200px) {
		height: 100%;
		@media (max-width: 1200px) {
			height: 100%;
			padding: 75px 0;
		}
	}
`

const Project = styled.div`
	width: 100%;
	font-size: 35px;
	letter-spacing: 2px;
	font-family: "just_another_handregular", cursive;
	display: flex;
	align-items: center;
	justify-content: center;

	margin-bottom: 30px;

	@media (min-width: 600px) {
		justify-content: ${(props) => props.start};
		width: 500px;
		font-size: 60px;
	}
`

const ProjectsTitle = styled(SectionTitle)`
	margin-bottom: 60px;
	z-index: 999;
`
const ProjectSvg = styled.img`
	width: 55px;
	height: 55px;
`

const LinkToProject = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	cursor: pointer;
	user-select: none;
	transition: opacity 0.15s;

	&:hover {
		opacity: 0.7;
	}
`

function Projects() {
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
			<ProjectsTitle>Projects</ProjectsTitle>
			{projects}
		</ProjectSection>
	)
}

export default Projects
