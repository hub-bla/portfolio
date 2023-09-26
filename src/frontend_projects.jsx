import Splitter from "./assets/Frontend_projects/splitter.webp"
import Tenzies from "./assets/Frontend_projects/tenzies.webp"
import Quizzical from "./assets/Frontend_projects/quizzical.webp"
import Countries from "./assets/Frontend_projects/countries.webp"
import Portfolio from "./assets/Frontend_projects/portfolio.webp"
import Flashcards from "./assets/Frontend_projects/flashcards.webp"

import Calculator from "./assets/Projects_icons/calculator.svg"
import Dice from "./assets/Projects_icons/dice.svg"
import Education from "./assets/Projects_icons/education.svg"
import Flag from "./assets/Projects_icons/flag.svg"
import Quiz from "./assets/Projects_icons/multiple-choice-quiz.svg"
import Legs from "./assets/Projects_icons/legs.svg"
const data = [
	{
		id: 0,
		src: Flashcards,
		name: "Flash Cards",
		link: "https://flash-cards-b1b45.web.app/",
		icon: Education,
	},
	{
		id: 1,
		src: null,
		name: "Keep The Beat",
		link: "https://github.com/hub-bla/rythmy",
		icon: Legs,
	},
	{
		id: 2,
		src: Splitter,
		name: "Splitter",
		link: "https://hub-bla.github.io/tip-calculator/",
		icon: Calculator,
	},
	{
		id: 3,
		src: Tenzies,
		name: "Tenzies",
		link: "https://hub-bla.github.io/tenzies/",
		icon: Dice,
	},
	{
		id: 4,
		src: Quizzical,
		name: "Quizzical",
		link: "https://hub-bla.github.io/quizzical/",
		icon: Quiz,
	},
	{
		id: 5,
		src: Countries,
		name: "Countries",
		link: "https://hub-bla.github.io/countries/",
		icon: Flag,
	},

	{
		id: 6,
		src: Portfolio,
		name: "This site :D",
		link: "https://hub-bla.github.io/portfolio/",
	},
]

export default data
