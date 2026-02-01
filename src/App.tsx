import "./App.css";
import Portfolio from "./Pages/Portfolio";
import { Hero } from "./sections//Hero";
import { Skills } from "./sections/Skills";
import { Contact } from "./sections/Contact";
import AnimatedSection from "./util/motion";

function App() {
	return (
		<div className="min-h-screen bg-[#f0e6d2] text-[#3e2723] font-serif selection:bg-[#8d6e63] selection:text-white overflow-x-hidden">
			<Portfolio />

			<AnimatedSection>
				<Skills />
			</AnimatedSection>

			{/* Contact section can be added here similarly */}
		</div>
	);
}

export default App;
