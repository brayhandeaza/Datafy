import './App.css'

// Components
import Header from "./components/Header"
import Banner from './components/Banner'
import Footer from './components/Footer'
import RoadMap from './components/RoadMap'

function App() {
	return (
		<div className="App">
			<Header />
			<div class="main-content-wrapper">
				<Banner />
				<RoadMap/>
			</div>
			<Footer />
		</div>
	)
}

export default App
