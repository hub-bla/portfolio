import styled from "styled-components"


const Section = styled.section`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`


const SectionTitle = styled.h2`
    font-size: 35px;
    letter-spacing: 5px;
    margin-bottom: 20px;
    
    @media (min-width: 600px){
        font-size: 40px;
    }
`



export {Section, SectionTitle}