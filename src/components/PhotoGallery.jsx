import { useState } from "react"
import { Heart } from "lucide-react"

export default function PhotoGallery() {
	const [selectedPhoto, setSelectedPhoto] = useState(null)

	const galleryModules = import.meta.glob(`../assets/\*.jpg`, { eager: true })

	// Convert the modules object into an array of { id, src, alt }
	const galleryPhotos = Object.entries(galleryModules)
		.filter(([path]) => {
			const fileName = path.match(/\/([^\/]+)\.jpg$/)?.[1]
			return /^\d+$/.test(fileName)
		})
		.map(([path, mod], idx) => ({
			id: idx + 1,
			src: mod.default || mod, // Use .default for Vite, fallback to mod
			alt: `Gallery photo ${idx + 1}`,
		}))

	return (
		<>
			{/* Gallery */}
			<section className="py-12 px-4 bg-gradient-to-r from-stone-50 to-amber-50">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-8">
						<h2 className="text-3xl font-bold text-primary mb-2">Bump Gallery</h2>
					</div>

					{/* Improved Masonry Grid using CSS columns */}
					<div className="columns-3 xl:columns-4 gap-4 space-y-4">
						{galleryPhotos.map((photo, index) => {
							// Predefined aspect ratios for variety
							const aspectRatios = [
								"aspect-[3/4]", // Portrait
								"aspect-[4/3]", // Landscape
								"aspect-[1/1]", // Square
								"aspect-[3/5]", // Tall portrait
								"aspect-[5/4]", // Wide landscape
								"aspect-[2/3]", // Standard portrait
							]
							const aspectRatio = aspectRatios[index % aspectRatios.length]
							const bottomAnchorClass = index === 8 || index === 10 ? "object-[bottom]" : ""

							return (
								<div
									key={photo.id}
									className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group break-inside-avoid mb-4 ${aspectRatio}`}
									onClick={() => setSelectedPhoto(photo)}
								>
									<img
										loading="lazy"
										src={photo.src}
										alt={photo.alt}
										className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 ${bottomAnchorClass}`}
									/>

									{/* Hover overlay */}
									<div className="absolute inset-0 bg-amber-900/0 group-hover:bg-amber-900/20 transition-colors duration-300"></div>

									{/* Heart icon on hover */}
									<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
											<Heart size={18} className="text-green-600" />
										</div>
									</div>

									{/* Bottom gradient */}
									<div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
								</div>
							)
						})}
					</div>
				</div>
			</section>

			{/* Photo Modal */}
			{selectedPhoto && (
				<div
					className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
					onClick={() => setSelectedPhoto(null)}
				>
					<div className="relative max-w-4xl max-h-full">
						<img
							src={selectedPhoto.src}
							alt={selectedPhoto.alt}
							loading="lazy"
							className="max-w-full max-h-[70vh] object-contain rounded-lg"
						/>
						<button
							onClick={() => setSelectedPhoto(null)}
							className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
						>
							✕
						</button>
					</div>
				</div>
			)}
		</>
	)
}
