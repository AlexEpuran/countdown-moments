import "./App.css";
import Spinner from "./components/Spinner.js";
import ComingSoon from "./components/ComingSoon";
import ParticlesMain from "./components/Particles";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheckSquare, faCoffee, faSearch, faBars, faTimes, faGift } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(fab, faCheckSquare, faCoffee, faSearch, faBars, faTimes, faGift);

function App() {
	return (
		<div className='App'>
			<ParticlesMain />
			<ComingSoon />
			<div class='loader'></div>
			<FontAwesomeIcon className='gift' icon='gift' />
		</div>
	);
}

export default App;
