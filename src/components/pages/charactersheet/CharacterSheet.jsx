import { useState } from "react";
import "./CharacterSheet.css";
import img from "../../../assets/kushiban.jpg";

export default function CharacterSheet() {
	const [state, setState] = useState();
	const [portrait, setPortrait] = useState(img);
	const [str, setStr] = useState(8);
	const [dex, setDex] = useState(10);
	const [con, setCon] = useState(11);
	const [int, setInt] = useState(12);
	const [wis, setWis] = useState(13);
	const [cha, setCha] = useState(15);
	const [tempStr, setTempStr] = useState();
	const [tempDex, setTempDex] = useState();
	const [tempCon, setTempCon] = useState();
	const [tempInt, setTempInt] = useState();
	const [tempWis, setTempWis] = useState();
	const [tempCha, setTempCha] = useState();

	const [totalHP, setTotalHP] = useState(4);
	const [currentVitality, setCurrentVitality] = useState(4);
	const [currentWounds, setCurrentWounds] = useState(4);
	const [maxVitality, setMaxVitality] = useState(4);
	const [maxWounds, setMaxWounds] = useState(4);
	const [skillTable, setSkillTable] = useState();

	function calcMod(score) {
		if (score > 11) {
			return `+${Math.floor((score - 10) / 2)}`;
		}
		return Math.floor((score - 10) / 2);
	}

	return (
		<main className="character-sheet">
			<section className="sheet-nav">
				<button className="sheet-main">Main</button>
				<button className="skills">Skills</button>
				<button className="background">Background</button>
				<button className="class">Class</button>
				<button className="feats">Feats</button>
				<button className="equipment">Equipment</button>
				<button className="combat">Combat</button>
			</section>

			<section className="cs-top">
				<div className="stats">
					<table>
						<tbody>
							<tr className="title">
								<td>
									<h4>Abilities</h4>
								</td>
							</tr>
							<tr className="str">
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Strength
									<span>{str}</span>
									<span>{calcMod(str)}</span>
								</td>
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Temp
									<span>{tempStr || "--"}</span>
									<span>
										{tempStr ? calcMod(tempStr) : "--"}
									</span>
								</td>
							</tr>
							<tr className="dex">
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Dexterity
									<span>{dex}</span>
									<span>{calcMod(dex)}</span>
								</td>
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Temp
									<span>{tempDex || "--"}</span>
									<span>
										{tempDex ? calcMod(tempDex) : "--"}
									</span>
								</td>
							</tr>
							<tr className="con">
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Constitution
									<span>{con}</span>
									<span>{calcMod(con)}</span>
								</td>
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Temp
									<span>{tempCon || "--"}</span>
									<span>
										{tempCon ? calcMod(tempCon) : "--"}
									</span>
								</td>
							</tr>
							<tr className="int">
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Intelligence
									<span>{int}</span>
									<span>{calcMod(int)}</span>
								</td>
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Temp
									<span>{tempInt || "--"}</span>
									<span>
										{tempInt ? calcMod(tempInt) : "--"}
									</span>
								</td>
							</tr>
							<tr className="wis">
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Wisdom
									<span>{wis}</span>
									<span>{calcMod(wis)}</span>
								</td>
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Temp
									<span>{tempWis || "--"}</span>
									<span>
										{tempWis ? calcMod(tempWis) : "--"}
									</span>
								</td>
							</tr>
							<tr className="cha">
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Charisma
									<span>{cha}</span>
									<span>{calcMod(cha)}</span>
								</td>
								<td
									className="scores"
									style={{ flexDirection: "column" }}>
									Temp
									<span>{tempCha || "--"}</span>
									<span>
										{tempCha ? calcMod(tempCha) : "--"}
									</span>
								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="hit-points">
					<table>
						<tbody>
							<tr>
								<td>Vitality</td>
								<td>Wounds</td>
							</tr>
							<tr className="current-hp">
								<td>{currentVitality}</td>
								<td>{currentWounds}</td>
							</tr>
							<tr className="max-hp-row">
								<td className="label">Max: </td>
								<td>{maxVitality}</td>
								<td className="label">Max: </td>
								<td>{maxWounds}</td>
							</tr>
						</tbody>
					</table>
				</div>

				<div className="basic-info"></div>
			</section>

			<section className="cs-center">
				<div className="saving-throws"></div>
				<div className="speed-initiative"></div>
			</section>

			<section className="skills">
				Skills
				{skillTable}
			</section>
		</main>
	);
}
