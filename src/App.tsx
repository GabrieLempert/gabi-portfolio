import "./App.css";
import Portfolio from "./Pages/Portfolio";
import { Hero } from "./sections//Hero";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import AnimatedSection from "./util/motion";

function App() {
	return (
		<div className="font-sans text-black-900 bg-white dark:bg-gray-900 dark:text-white w-full min-w-full">
			<AnimatedSection>
				<Hero />
			</AnimatedSection>
			<AnimatedSection>
				<Skills />
			</AnimatedSection>
			<AnimatedSection>
				<Portfolio />
			</AnimatedSection>
			<AnimatedSection>
				<Contact />
			</AnimatedSection>
		</div>
	);
}

export default App;
