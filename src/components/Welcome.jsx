import Logo from "./Logo"
import styled, {keyframes} from "styled-components"


import logoBlob from "../assets/WelcomePage/logo-blob.svg"
import topLeftBlob from "../assets/WelcomePage/blob-top-left.svg"
import bottomRightBlob from "../assets/WelcomePage/blob-bottom-right.svg"
import Profile from "../assets/WelcomePage/profile.webp"



const FadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
`

const BlobDiv = styled.div`
    
    height: 250px;
    width: 250px;

    background-image: url(${logoBlob});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    position: relative;

    

    @media(min-width: 600px){
        height: 350px;
        width: 350px;
    }
`


const Hi = styled.h1`
    

    letter-spacing: 5px;
    font-size: 40px;

    position: relative;
    top: -20px;
    left: -40px;
    @media (min-width: 600px){
        left: -80px;
        font-size: 50px;
    }
    
`

const ImportantLinks = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    display: flex;
    gap: 20px;
    font-size: 16px;
    margin-top: 20px;
    margin-right: 20px;

    @media(min-width: 600px){
        font-size: 22px;
        gap: 60px;
        margin-top: 30px;
        margin-right: 40px;
    }
`

const LinkToOtherWebsite = styled.a`
    letter-spacing: 2px;
    font-family: 'just_another_handregular', cursive;
    color: #fff;
    text-decoration: none;
    font-size: 25px;
    @media(min-width: 600px){
        font-size: 30px;
    }
    transition: color 0.15s;

    &:hover{
        color: #3A88FE;
    }
`

const WelcomeSection = styled.section`
    height: 100vh;
    animation: ${FadeIn} 0.3s ease-in;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${topLeftBlob}), url(${bottomRightBlob});
    background-repeat: no-repeat;
    background-position: top left, bottom 30px right;
    
    position: relative;

    @media(min-width: 1000px){
        background-size: 10%;
    }
`



const ImgProfile = styled.img`
    
    width: 450px;
    height: 450px;
    object-fit: cover;
    object-position: top;
    border-radius: 50%;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
    position: relative;   

    @media(min-width: 1800px){
        width: 550px;
        height: 550px;
    }
`

const ProfileDiv = styled.div`
    margin-inline: clamp(100px, 15%, 500px) clamp(100px, 10%, 150px);

    animation: ${FadeIn} 0.3s ease-in;
    
    position: relative;
    &:before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        top: 5px;
        left: 20px;
        border: 3px solid rgba(255, 255, 255, 1);
        z-index: -1;
    }

    @media (max-width: 1200px){
        display: none;
    }
`


function Welcome(){

    return (

        <WelcomeSection>
            <ImportantLinks>
                <LinkToOtherWebsite 
                href="https://github.com/hub-bla"
                target="_blank">
                    GitHub
                </LinkToOtherWebsite>
                <LinkToOtherWebsite 
                href="https://www.linkedin.com/in/hubert-b%C5%82aszczyk-33841424b/"
                target="_blank">
                    Linkedin
                    </LinkToOtherWebsite>
                {/* <LinkToOtherWebsite>CV</LinkToOtherWebsite> */}
            </ImportantLinks>
            
            <BlobDiv>
                <Hi>Hi, I'm</Hi>
                    <Logo alt=''/>
            </BlobDiv>

            <ProfileDiv>
                <ImgProfile src={Profile} alt='photo of very distinguished man'/>
            </ProfileDiv>
            
        </WelcomeSection>
    )
}


export default Welcome