import "./App.css";
import Portfolio from "./Pages/Portfolio";
import {Hero} from "./sections//Hero";
import {About} from "./sections/About";
import {Skills} from "./sections/Skills";
import {Contact} from "./sections/Contact";


function App() {
	return (
		<div className="font-sans text-gray-900 bg-white w-full mx-auto">
			<Hero />
			<About />
			<Skills />
			<Portfolio />
			<Contact />
		</div>
	);
}

export default App;
