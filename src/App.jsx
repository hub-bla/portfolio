import "./App.css"
import About from "./components/About"
import Contact from "./components/Contact"
import Welcome from "./components/Welcome"
import FrontendProjects from "./components/FrontendProjects"
import MachineLearningProjects from "./components/MachineLearningProjects"
function App() {
	return (
		<>
			<Welcome />
			<About />
			<FrontendProjects />
			<MachineLearningProjects />
			<Contact />
		</>
	)
}

export default App
