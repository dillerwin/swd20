import { useState } from "react";
import "./CharacterSheet.css";
import img from "../../../assets/kushiban.jpg";
import character from "../../../dev-temp/Minrit.json";

export default function CharacterSheet() {
	const [state, setState] = useState();
	const [portrait, setPortrait] = useState(img);
	const [str, setStr] = useState(character.abilities.str);
	const [dex, setDex] = useState(character.abilities.dex);
	const [con, setCon] = useState(character.abilities.con);
	const [int, setInt] = useState(character.abilities.int);
	const [wis, setWis] = useState(character.abilities.wis);
	const [cha, setCha] = useState(character.abilities.cha);
	const [tempStr, setTempStr] = useState();
	const [tempDex, setTempDex] = useState();
	const [tempCon, setTempCon] = useState();
	const [tempInt, setTempInt] = useState();
	const [tempWis, setTempWis] = useState();
	const [tempCha, setTempCha] = useState();

	const [currentVitality, setCurrentVitality] = useState(4);
	const [currentWounds, setCurrentWounds] = useState(4);
	const [skillTable, setSkillTable] = useState();

	function calcMod(score) {
		if (score > 11) {
			return `+${Math.floor((score - 10) / 2)}`;
		}
		return Math.floor((score - 10) / 2);
	}

	function calcBonuses(bonusArr) {
		let totalBonus = 0;

		for (let i = 0; i < bonusArr.length; i++) {
			totalBonus += bonusArr[i].bonus;
		}

		return totalBonus;
	}

	return (
		<main className="character-sheet">
			<section className="basic-info">
				<div className="info-section">
					<span className="info-name">{character.name}</span>
					<span className="info-species">
						{character.description.genderIdentity}{" "}
						{character.species.name}
					</span>
					<span className="info-class">
						{character.class.name} {character.level}
					</span>
				</div>
			</section>

			<section className="sheet-nav">
				<button className="sheet-main">Main</button>
				<button className="skills">Skills</button>
				<button className="background">Background</button>
				<button className="class">Class</button>
				<button className="feats">Feats</button>
				<button className="equipment">Equipment</button>
			</section>

			<section className="cs-top">
				<div className="stats">
					<div className="stat-container">
						<div
							className="stat"
							id="str">
							<h4 className="stat-name-label">Strength</h4>
							<h2 className="stat-score">{str}</h2>
							<span className="stat-mod">{calcMod(str)}</span>
						</div>
						<div
							className="stat"
							id="dex">
							<h4 className="stat-name-label">Dexterity</h4>
							<h2 className="stat-score">{dex}</h2>
							<span className="stat-mod">{calcMod(dex)}</span>
						</div>
						<div
							className="stat"
							id="con">
							<h4 className="stat-name-label">Constitution</h4>
							<h2 className="stat-score">{con}</h2>
							<span className="stat-mod">{calcMod(con)}</span>
						</div>
					</div>
					<div className="stat-container">
						<div
							className="stat"
							id="int">
							<h4 className="stat-name-label">Intelligence</h4>
							<h2 className="stat-score">{int}</h2>
							<span className="stat-mod">{calcMod(int)}</span>
						</div>
						<div
							className="stat"
							id="wis">
							<h4 className="stat-name-label">Wisdom</h4>
							<h2 className="stat-score">{wis}</h2>
							<span className="stat-mod">{calcMod(wis)}</span>
						</div>
						<div
							className="stat"
							id="cha">
							<h4 className="stat-name-label">Charisma</h4>
							<h2 className="stat-score">{cha}</h2>
							<span className="stat-mod">{calcMod(cha)}</span>
						</div>
					</div>
				</div>

				<div className="top-center">
					<div className="damage-point-container">
						<div className="dp-container">
							<div className="damage-point">
								<h4 className="dp-name-label">Vitality</h4>
								<h2 className="dp-current">
									{character.vitality.current}
								</h2>
								<span className="dp-max">
									Max: {character.vitality.max}
								</span>
							</div>
							<div className="damage-point">
								<h4 className="dp-name-label">Wounds</h4>
								<h2 className="dp-current">
									{character.wounds.current}
								</h2>
								<span className="dp-max">
									Max: {character.wounds.max}
								</span>
							</div>
						</div>
						<div>
							<span className="dp-info">
								Vitality Die: {character.vitality.dice}
							</span>
						</div>
					</div>
					<div className="initiative-container">
						<div className="initiative-title">Initiative</div>
						<div className="initiative">
							<div className="initiative-section">
								<span className="initiative-content">
									{character.initiative.dexBase +
										calcBonuses(
											character.initiative.bonuses
										)}
								</span>
								<span className="initiative-label">Total</span>
							</div>
							<div className="initiative-section">
								<span className="initiative-content">=</span>
								<span className="initiative-label"></span>
							</div>
							<div className="initiative-section">
								<span className="initiative-content">
									{character.initiative.dexBase}
								</span>
								<span className="initiative-label">Dex</span>
							</div>
							<div className="initiative-section">
								<span className="initiative-content">+</span>
								<span className="initiative-label"></span>
							</div>
							<div className="initiative-section">
								<span className="initiative-content">
									{calcBonuses(character.initiative.bonuses)}
								</span>
								<span className="initiative-label">Misc</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <section className="cs-center">
        <div className="saving-throws"></div>
        <div className="speed-initiative"></div>
      </section> */}

			{/* <section className="skills">
        Skills
        {skillTable}
      </section> */}
		</main>
	);
}
