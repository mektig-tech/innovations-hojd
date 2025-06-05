import "./index.css";

import logo from "./logo.svg";

export function App() {
	return (
		<div className="max-w-7xl mx-auto p-4 relative z-10">
			<div className="flex-col sm:justify-center items-center flex gap-26 max-w-[1000px] animate-fadeIn delay-500">
				<img src={logo} className=" w-full  animate-spin-slow" alt="Bun logo" />
				<div className="pl-2 sm:pl-4 flex flex-col gap-4 border-l-6 border-black/40">
					<h1 className="text-4xl sm:text-5xl font-black animate-fadeIn">
						Verksamhet
					</h1>
					<p className="text:lg sm:text-2xl text-gray-700 animate-fadeIn">
						Innovationsutvecklingsbolag som utvecklar idéer i syfte att skapa
						nya lösningar med ett genomslag som ger en värdeskapande positiv
						förändring.
					</p>
				</div>
				<div className="text-center">
					<p className="text-lg mb-4">Innovationshöjd Sverige AB</p>
					<p>Besöksadress: Kungsgatan 43, 632 17 Eskilstuna</p>
					<a
						href="mailto:lennart.kisswani@innovationshojd.se"
						className="text-blue-500 hover:underline"
					>
						lennart.kisswani@innovationshojd.se
					</a>
				</div>
			</div>
		</div>
	);
}

export default App;
