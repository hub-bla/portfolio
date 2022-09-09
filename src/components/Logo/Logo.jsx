import { useEffect, useState } from "react"
import { animated, useSpring} from "react-spring"
import styled from "styled-components"

function LetterPart({toggle, d, wait, color}){

    const [length, setLength] = useState(null)
    const animatedStyle = useSpring({
        strokeDasharray: length,
        strokeDashoffset: toggle ? 0 : length,
        delay: wait,
        config: {
            duration: 200,
        },
    })
    
    return(
        <animated.path ref={(ref) => {
            if(ref){
                setLength(ref.getTotalLength())
                
            }
        }}
        style={animatedStyle}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="10"
        d={d} 
        />
    )
}

const Svg = styled.svg`
    position: relative;
    width: 80%;
`


function Logo() {
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setToggle(true)
        }, 0)
    }, [])
    return (
        <Svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 384 127"
        >
            <LetterPart toggle={toggle} d="M17 113C17 113 24 72.5 17 15" color="#FFFFFF" />
            <LetterPart toggle={toggle} d="M5 81C28.0213 66.34 36.2347 62.2109 60.5 54" wait={200} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M66.5 14.5C57.7199 60.3748 57.7401 79.25 66.5 111.5" wait={400} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M93 60C87.2797 89.518 89.1593 97.3908 97.5 110.5" wait={600} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M97 110C105.634 115.509 113.856 114.394 117.5 110C117.5 110 122.5 37 122.5 65.5C122.5 94 128.5 118.5 138 110" wait={800} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M157.5 108C150.5 84.5 153 55 143.5 28" wait={1000} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M149.5 85C173 29.5 212.5 81.5 159 107.5" wait={1200} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M217.5 51C193.5 54 213.5 138 244 94.5" wait={1400} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M198.5 78.5C267.5 82 223 59 217.5 51" wait={1600} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M267.5 121.5C273.5 98.5 270 80.5 267.5 58" wait={1800} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M268 56.5C288.5 25.5 303 63.5 273.5 87.5" wait={2000} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M272 92C283.7 104.154 292.5 104 315.5 106.5" wait={2200} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M352.5 113C346.5 70 346 51 346 5.5" wait={2400} color="#FFFFFF"/>
            <LetterPart toggle={toggle} d="M325 39C344.5 47.5 363 31.5 379 31.5" wait={2600} color="#FFFFFF"/>



            <LetterPart toggle={toggle} d="M17 113C17 113 24 72.5 17 15" wait={300} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M5 81C28.0213 66.34 36.2347 62.2109 60.5 54" wait={500} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M66.5 14.5C57.7199 60.3748 57.7401 79.25 66.5 111.5" wait={700} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M93 60C87.2797 89.518 89.1593 97.3908 97.5 110.5" wait={900} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M97 110C105.634 115.509 113.856 114.394 117.5 110C117.5 110 122.5 37 122.5 65.5C122.5 94 128.5 118.5 138 110" wait={1100} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M157.5 108C150.5 84.5 153 55 143.5 28" wait={1300} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M149.5 85C173 29.5 212.5 81.5 159 107.5" wait={1500} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M217.5 51C193.5 54 213.5 138 244 94.5" wait={1700} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M198.5 78.5C267.5 82 223 59 217.5 51" wait={1900} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M267.5 121.5C273.5 98.5 270 80.5 267.5 58" wait={2100} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M268 56.5C288.5 25.5 303 63.5 273.5 87.5" wait={2300} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M272 92C283.7 104.154 292.5 104 315.5 106.5" wait={2500} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M352.5 113C346.5 70 346 51 346 5.5" wait={2700} color="#3A88FE"/>
            <LetterPart toggle={toggle} d="M325 39C344.5 47.5 363 31.5 379 31.5" wait={2900} color="#3A88FE"/>
        </Svg>
    );
  }
  
  export default Logo
  