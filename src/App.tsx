import "./index.css";

import logo from "./logo.svg";
import logoWingler from "./wingler_symbol.svg";

export function App() {
	return (
		<>
			<section className="max-w-7xl mx-auto p-4 relative z-10 min-h-screen grid place-items-center">
				<div className="flex-col sm:justify-center items-center flex gap-26 max-w-[1000px] animate-fadeIn delay-500">
					<img
						src={logo}
						className=" w-full  animate-spin-slow"
						alt="Bun logo"
					/>
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
							href="mailto:info@innovationshojd.se"
							className="text-blue-500 hover:underline"
						>
							info@innovationshojd.se
						</a>
					</div>
				</div>
			</section>
			<section className=" text-white mx-auto p-4 relative z-10 min-h-screen grid place-items-center bg-gradient-to-br from-wing-base to-wing-base-neutral">
				<div className="flex-col sm:justify-center items-center flex gap-26 max-w-[1000px] animate-fadeIn delay-500">
					<img
						src={logoWingler}
						className="h-60 animate-spin-slow"
						alt="Bun logo"
					/>
					<div className="pl-2 sm:pl-4 flex flex-col gap-4 border-l-6 border-white/40">
						<h1 className="text-4xl sm:text-5xl font-black animate-fadeIn">
							Wingler®
						</h1>
						<p className="text:lg sm:text-2xl text-gray-300 animate-fadeIn">
							Innovationshöjd presenterar stolt sin första app{" "}
							<span>Wingler®</span>
							<br />
							<span>Wingler®</span> är en innovativ samåkningsapp som gör det
							enkelt att dela resor och kostnader. Appen räknar automatiskt och
							rättvist ut vad varje person ska betala, perfekt för allt från
							vardagspendling till helgresor och spontana bilfärder.
							<br />
							Tillgänglig för både iOS och Android, <span>Wingler®</span> gör
							det smidigt för förare och passagerare att resa tillsammans.
							Resultatet? En enklare vardag och ett mer hållbart resande.
						</p>
					</div>
					<div className="text-center">
						<a
							href="https://www.wingler.app"
							target="_blank"
							className="text-blue-500 hover:underline"
							rel="noreferrer"
						>
							Till innovations höjd hemsida Wingler
						</a>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
