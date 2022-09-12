import {Section, SectionTitle} from './SectionStyle'
import styled from 'styled-components'
import Wave from '../assets/Projects/wave.svg'

const ProjectSection = styled(Section)`
    background-color: #0D1423;
    background-image: url(${Wave});
    background-repeat: no-repeat;
    background-position: 0 70%;    
`

const ProjectsTitle = styled(SectionTitle)`
    z-index: 999;
`

function Projects(){
    return(
        <ProjectSection>
            <ProjectsTitle>Projects</ProjectsTitle>
        </ProjectSection>
    )
}

export default Projects