import styled from "styled-components"
import { Section, SectionTitle } from "./styles/SectionStyle"
import PictureOfMyself from "../assets/About/about-photo.png"

const Text = styled.p`
	width: 350px;
	font-size: 18px;
	@media (min-width: 600px) and (min-height: 700px) {
		width: 450px;
		font-size: 26px;
	}
`
const BlueText = styled.span`
	color: #3a88fe;
`
const AboutSection = styled(Section)`
	@media (min-width: 1200px) {
	}

	@media (max-width: 1200px) {
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

	@media (max-width: 1200px) {
		display: none;
	}

	&:before {
		content: "";
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
	object-position: 25% 50%;
	border-radius: 20px;
`

const TextDiv = styled.div`
	margin-top: 25%;
	@media (max-width: 1200px) {
		margin: 0;
	}
`

const FlexContainer = styled.div`
	height: 100%;
`

function About() {
	return (
		<AboutSection>
			<FlexContainer>
				<TextDiv>
					<SectionTitle>Me, Myself and I</SectionTitle>
					<Text>
						I am a 18 years old self-taught frontend developer, currently
						studying at Poznan University of Technology. A lot has happend
						during my adventure with programming.
					</Text>
					<Text>
						Except the fact that I learned technologies such as{" "}
						<BlueText>HTML, </BlueText>
						<BlueText>CSS, </BlueText> <BlueText>JS, </BlueText>
						<BlueText>React, </BlueText>
						<BlueText>Styled-Components, </BlueText>
						<BlueText>Python, </BlueText>
						all of which I know at a basic level, I also joined the student
						organisation at my university called AKAI where I also worked on a
						website for settling boxes at WOSP. The other thing I'd like to
						share is that I won with my friends a hackathon created by PUT and
						AKAI in the best idea cathegory. I am an open-minded person,
						motivated to learn more and more.
					</Text>
					<Text>
						In my free time, you can find me running around Malta Lake or on
						kaggle.
					</Text>
				</TextDiv>
			</FlexContainer>
			<DivPic>
				<MePic src={PictureOfMyself} alt='' loading='lazy' />
			</DivPic>
		</AboutSection>
	)
}

export default About
