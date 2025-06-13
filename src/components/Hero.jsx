// import { useEffect, useRef } from "react"
import coverPhoto from "../assets/cover.jpg"

export default function Hero() {
	// Smooth scroll to next section
	const scrollToInvite = () => {
		document.getElementById("invite-section").scrollIntoView({
			behavior: "smooth",
		})
	}
	// const heroRef = useRef(null)
	// const lastScrollY = useRef(window.scrollY)

	// useEffect(() => {
	// 	const handleScroll = () => {
	// 		const hero = heroRef.current
	// 		if (!hero) return

	// 		const rect = hero.getBoundingClientRect()
	// 		const inView = rect.top < window.innerHeight && rect.bottom > 0

	// 		if (inView && window.scrollY > lastScrollY.current) {
	// 			// User is scrolling down and hero is in view
	// 			scrollToInvite()
	// 		}
	// 		lastScrollY.current = window.scrollY
	// 	}

	// 	window.addEventListener("scroll", handleScroll)
	// 	return () => window.removeEventListener("scroll", handleScroll)
	// }, [scrollToInvite])

	return (
		<section
			id="hero"
			// ref={heroRef}
			className="relative h-screen flex items-start md:items-center justify-center overflow-hidden"
		>
			{/* Hero Background Image */}
			<div className="absolute inset-0">
				<img src={coverPhoto} alt="Hero background" className="w-full h-full object-cover" />
				{/* yellow */}
				{/* <div className="absolute inset-0 bg-gradient-to-b from-amber-900/40 via-amber-900/20 to-amber-900/60"></div>  */}
				{/* wash out */}
				{/* <div class="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/60"></div> */}
			</div>

			<div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-10">
				<div className="md:bg-white/20 backdrop-blur-lg rounded-lg px-10 py-8">
					<h1 className="text-5xl md:text-7xl font-bold text-primary mb-1 font-subtitle drop-shadow-sm">
						BABY SHOWER
					</h1>
					<p className="text-4xl md:text-7xl text-secondary drop-shadow-sm mb-0 font-subtitle">
						Gender Reveal
					</p>
				</div>
			</div>

			{/* Scroll indicator */}
			<div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white cursor-pointer transition-colors duration-300"
				onClick={scrollToInvite}
			>
				<div className="flex flex-col items-center animate-bounce hover:animate-none">
					<span className="text-sm mb-2">Scroll down</span>
					<div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center hover:border-white transition-colors duration-300">
						<div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
					</div>
				</div>
			</div>
		</section>
	)
}
