import { useState } from "react";
import "./Navbar.css";

export default function Navbar({ changePage }) {
	return (
		<nav className="navbar">
			<button
				className="navbar-btn-left"
				onClick={() => changePage("characters")}>
				Characters
			</button>
			<button
				className="navbar-btn-center"
				onClick={() => changePage("characterSheet")}>
				Character Sheet
			</button>
			<button
				className="navbar-btn-right"
				onClick={() => changePage("compendium")}>
				Compendium
			</button>
		</nav>
	);
}
