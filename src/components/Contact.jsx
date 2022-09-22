import {Section, SectionTitle} from './SectionStyle'
import styled from "styled-components"
import Blob from '../assets/Contact/Group.svg'
import Blobs from'../assets/Contact/Group-1.svg'
import { useState } from 'react'

const ContactSection = styled(Section)`
    flex-direction: column;
    background-image: url(${Blob});
    background-repeat: no-repeat;
    background-size: 200px;
    background-position: 90% 100%;
    @media(min-width: 600px){
        background-size: 250px;
    }
    @media(max-width: 1100px){
        height: 100%;
        padding: 75px 0 150px 0;
    }
    @media(min-width: 1100px){
        background-image: url(${Blob}), url(${Blobs});
        background-size: 20%, 40%;
        background-position: 90% 100%, 100% 20%;
        display: block;
        padding: 2% 0 0 10%
    }

`

const ContactTitle = styled(SectionTitle)`
    margin-top: 50px;
`

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width:270px;
    @media(min-width: 1100px){
        width: 500px;
    }
`

const SmallInput = styled.input`
    border: none;
    border-bottom: 2px solid #fff;
    background-color: transparent;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    font-family: 'Marvel', sans-serif;
    color: #fff;
    outline: none;
    &:focus{
        border-radius: 20px;
        border: 2px solid #fff;
    }
`

const MessageInput = styled.textarea`
    border: none;
    width: 100%;
    background-color: transparent;

    padding: 10px;
    font-size: 18px;
    
    font-family: 'Marvel', sans-serif;
    color: #fff;
    outline: none;
    resize: none;

    
    border: 2px solid #fff;
    border-radius: 20px;

    height: 150px;
    @media(min-width: 1100px){
        height: 250px;
    }
`

const SendButton = styled.button`
    border: 2px solid #fff;
    border-radius: 20px;
    font-size: 18px;
    font-family: 'Marvel', sans-serif;
    font-weight: bold;
    padding: 10px;
    color: #fff;
    background-color: transparent;
    width: 100%;
    cursor: pointer;
    transition: background-color 0.15s,
    color 0.15s;
    
    &:hover{
        background-color: #fff;
        color: #0D1423;
    }


    @media(min-width: 1100px){
        border-radius: 15px;
        
    }
`

function Contact(){
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        textarea: ''
    })
    function handleChange(event){
        const {value, name} = event.target
        setEmailData(prevEmailData => ({...prevEmailData, [name]: value}))
    }


    

    return (
    <ContactSection>
        <ContactForm action="https://formsubmit.co/a9e4f990f77ceb0bca6772590eac9498" method="POST">
            <ContactTitle>Get in touch</ContactTitle>

            <SmallInput 
            name="name" 
            placeholder='Name' 
            type="text"
            onChange={handleChange}
            value={emailData.name}
            />

            <SmallInput 
            name="email" 
            placeholder='Email' 
            type="email" 
            onChange={handleChange}
            value={emailData.email}
            required/>

            <MessageInput 
            type="textarea"
            name="textarea" 
            placeholder='Message' 
            onChange={handleChange}
            value={emailData.message}
            required />

            <SendButton type='submit'>Send</SendButton>
        </ContactForm>
    </ContactSection>
    )
}

export default Contact