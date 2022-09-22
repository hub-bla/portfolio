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
        border: 4px solid #fff;
    }
    
    object-fit: cover;
    border-radius: 20px;
    border: 2px solid #fff;
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
    width: 48px;
    height: 48px;
   
`
const ArrowButton = styled.img`
    width: 48px;
    height: 48px;
    object-position: fit;
`

const LeftButton = styled(CarouselButton)`
    bottom: -40%;
    left: 20%;
    transform: rotate(180deg);
    @media (min-width: 600px){
        bottom: 50%;
        left: -20%;
    }
`

const RightButton = styled(CarouselButton)`
    bottom: -40%;
    right: 20%;
    @media (min-width: 600px){
        bottom: 50%;
        right: -20%;
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
                <ArrowButton src={Arrow} alt='' id='left-button'/>
            </LeftButton>
            
            <a href={data[count].link} target="_blank" aria-label="Jump to the project">
                <CarouselImg src={data[count].src} alt='' loading="lazy"/>
            </a>

            <RightButton onClick={nextItem}>
                <ArrowButton src={Arrow} alt='' id='right-button'/>
            </RightButton>
            
        </CarouselDiv>
    )
}

export default Carousel