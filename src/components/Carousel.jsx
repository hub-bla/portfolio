import data from "../carouseldata";
import styled, {keyframes} from "styled-components";
import Arrow from "../assets/CarouselImages/arrow.svg"
import { useState, useRef } from "react"

import Waves from '../assets/Projects/waves.svg'
import MobileWaves from '../assets/Projects/mobile-waves.svg'

const CarouselImg = styled.img`
    box-sizing: border-box;
    width: 250px;
    @media (min-width: 600px){
        width: 400px;
    }

    @media (min-width: 1200px){
        width: 800px;
        
    }
    
    object-fit: cover;
    border-radius: 20px;
    border: 4px solid #fff;
    position: relative;
`
const CarouselDiv =  styled.div`
    width: 250px;
    border-radius: 20px;
    position: relative;
    
    @media (min-width: 600px){
        width: 400px;
    }

    @media (min-width: 1200px){
        width: 800px;
    }

    
`

const CarouselButton = styled.button`
    position: absolute;
    cursor: pointer;
    background-color: transparent;
    border: none;
   
`
const ArrowButton = styled.img`
    width: 20px;
    @media (min-width: 600px){
        width: 40px;
    }
`

const LeftButton = styled(CarouselButton)`
    top: 50%;
    left: -12%;
    transform: rotate(180deg);
    @media (min-width: 600px){
        left: -20%;
    }
`

const RightButton = styled(CarouselButton)`
    top: 50%;
    right: -12%;
    @media (min-width: 600px){
        right: -20%;
    }
`

const BackgroundDiv = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 60%;
    background-image: url(${MobileWaves});
    background-repeat: no-repeat;
    background-size: 100vw;
    background-position: top;
    @media (min-width: 600px){
        background-image: url(${Waves});
}
`

function Carousel(){
    const [count, setCount] = useState(0)


    function nextItem(){
        setCount(prevCount => prevCount === data.length - 1 ? 0 : prevCount + 1)
    }

    function previousItem(){
        setCount(prevCount => prevCount === 0 ? data.length - 1 : prevCount - 1)
    }
    return(
        <CarouselDiv>

            <LeftButton onClick={previousItem}>
                <ArrowButton src={Arrow} />
            </LeftButton>
            
            <a href={data[count].link} target="_blank">
                <CarouselImg src={data[count].src} alt='' />
            </a>

            <RightButton onClick={nextItem}>
                <ArrowButton src={Arrow} />
            </RightButton>
            
        </CarouselDiv>
    )
}

export default Carousel