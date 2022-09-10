import styled from 'styled-components'
import {Section, SectionTitle} from './SectionStyle'
import MobileLine from '../assets/About/mobile-line.svg'
import DesktopLine from '../assets/About/desktop-line.svg'
import PictureOfMyself from '../assets/About/about-photo.webp'


const Text = styled.p`
    width: 300px;

    @media (min-width: 600px) and (min-height: 700px){
        width: 400px;
        font-size: 30px;
    }
`

const AboutSection = styled(Section)`
    background-image: url(${MobileLine});
    background-repeat: no-repeat;
    background-size: 100vw;
    background-position: 0 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media(min-width: 1000px){
        background-image: url(${DesktopLine});
    }

`

const DivPic = styled.div`
    width: 400px;
    height: 550px;
    border-radius: 20px;
    margin-left: clamp(100px, 20%, 600px);
    position: relative;
    @media (max-width: 1200px){
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
    margin-top: 20%;
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
                    Hello, my name is Hubert and I am a self-taught frontend developer. In the last year I have learned technologies such as HTML, CSS, JS,  React,  all of which I know at a basic level.
                I am an open-minded person, motivated to learn more and more.
                </Text>
            </TextDiv>
        </FlexContainer>
        <DivPic>
            <MePic src={PictureOfMyself}/>
        </DivPic>
        
    </AboutSection>
    )
}

export default About