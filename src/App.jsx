import "./App.css"

import Hero from "./components/Hero"
import Info from "./components/Info"
import PhotoGallery from "./components/PhotoGallery"
import Footer from "./components/Footer"

export default function App() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-amber-50 to-stone-100">
			<Hero />
			<Info />
			<PhotoGallery />
			<Footer />
		</div>
	)
}
