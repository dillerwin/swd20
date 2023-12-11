import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import Characters from "./components/pages/characters/Characters";
import Compendium from "./components/pages/compendium/Compendium";
import CharacterSheet from "./components/pages/charactersheet/CharacterSheet";

export default function App() {
	const [currentPage, setCurrentPage] = useState(null);
	const home = <main className="home"></main>;
	const characters = <Characters />;
	const compendium = <Compendium />;
	const characterSheet = <CharacterSheet />;

	async function restartApp() {
		// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
		await invoke("restart_app");
	}

	function cancelRefresh(event) {
		if (event.key === "F5") {
			event.preventDefault();
		}
	}

	function cancelContext(event) {
		event.preventDefault();
	}

	function changePage(newPage) {
		switch (newPage) {
			case "characters":
				setCurrentPage(characters);
				break;
			case "characterSheet":
				setCurrentPage(characterSheet);
				break;
			case "compendium":
				setCurrentPage(compendium);
				break;
		}
	}

	useEffect(() => {
		// TODO: enable before packaging app
		// document.addEventListener("keydown", cancelRefresh);
		// document.addEventListener("contextmenu", cancelContext);
	}, []);

	return (
		<div className="app-container">
			<Navbar changePage={changePage} />
			{currentPage || home}
		</div>
	);
}
