import {Section, SectionTitle} from './SectionStyle'
import styled from 'styled-components'

import Carousel from './Carousel'
const ProjectSection = styled(Section)`
    flex-direction: column;
    background-color: #0D1423;
    
`

const ProjectsTitle = styled(SectionTitle)`
    margin-bottom: 60px;
    z-index: 999;
`


function Projects(){
    return(
        <ProjectSection>
            
                <ProjectsTitle>Projects</ProjectsTitle>
                    <Carousel/>
                
        </ProjectSection>
    )
}

export default Projects