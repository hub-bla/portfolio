import styled from "styled-components"


const Section = styled.section`
    height: 100vh;
`


const SectionTitle = styled.h2`
    font-size: 40px;
    letter-spacing: 5px;
    margin-bottom: 20px;
    
    @media (min-width: 600px){
        font-size: 50px;
    }
`



export {Section, SectionTitle}