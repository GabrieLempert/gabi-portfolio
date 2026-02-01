import "./App.css";
import Portfolio from "./Pages/Portfolio";

function App() {
	return (
		// 'snap-y snap-mandatory' creates the app-like scrolling feel
		<div className="h-screen w-screen bg-[#f4f1ea] overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth">
			<Portfolio />
		</div>
	);
}

export default App;
