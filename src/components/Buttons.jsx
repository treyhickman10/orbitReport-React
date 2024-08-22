import satData from "./satData";
import styling from "./styling.css";

const Buttons = ({ filterByType, setSat, displaySats }) => {
	return (
		<div className="flex-container">
			{displaySats.map((sat, id) => {
				return (
					<button onClick={() => filterByType(sat)} key={id}>
						{sat} Orbit
					</button>
				);
			})}
			<button onClick={() => setSat(satData)}>All Orbit</button>
		</div>
	);
};

export default Buttons;
