import styled from 'styled-components'
import {Section, SectionTitle} from './SectionStyle'
import DesktopLine from '../assets/About/desktop-line.svg'
import PictureOfMyself from '../assets/About/about-photo.webp'


const Text = styled.p`
    width: 300px;

    @media (min-width: 600px) and (min-height: 700px){
        width: 420px;
        font-size: 18px;
    }
`
const BlueText = styled.span`
    color: #3A88FE;
`
const AboutSection = styled(Section)`

    @media(min-width: 1200px){
        background-image: url(${DesktopLine});
        background-repeat: no-repeat;
        background-size: 100vw;
        background-position: 0 90%;
    }

    @media(max-width: 1200px){
        height: 100%;
        padding: 75px 0;
    }



`

const DivPic = styled.div`
    width: 400px;
    height: 550px;
    border-radius: 20px;
    margin-left: clamp(100px, 20%, 600px);
    position: relative;
    
    @media(max-width: 1200px){
        display: none;
    }

    &:before{
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        bottom: 20px;
        right: 30px;
        border-radius: 20px;
        border: 3px solid #fff;
        z-index: -1;
    }
`

const MePic = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;

`

const TextDiv = styled.div`
    margin-top: 25%;
    @media(max-width: 1200px){
        margin: 0;
    }
`

const FlexContainer = styled.div`
    height: 100%;
`

function About(){
    return(
    <AboutSection>
        <FlexContainer>
            <TextDiv>
                
                <SectionTitle>
                    Me, Myself and I
                </SectionTitle>
                <Text>
                    I am a 18 years old self-taught frontend developer. In the last year I have learned technologies such as <BlueText>HTML</BlueText>, <BlueText>CSS</BlueText>, <BlueText>JS</BlueText>,  <BlueText>React</BlueText>, <BlueText>Styled-Components</BlueText>, all of which I know at a basic level.
                I am an open-minded person, motivated to learn more and more.
                </Text>
            </TextDiv>
        </FlexContainer>
        <DivPic>
            <MePic src={PictureOfMyself} alt='' loading='lazy'/>
        </DivPic>
        
    </AboutSection>
    )
}

export default About