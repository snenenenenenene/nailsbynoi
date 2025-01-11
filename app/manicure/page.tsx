// app/manicure/page.tsx
"use client";

import { ClickableImage } from '@/components/clickable-image';
import { siteConfig } from '@/config/site';
import { ChevronLeft, ChevronRight, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

// Define all page images (static content)
const pageImages = [
	{ src: "/images/nails1.jpg", alt: "Noi Manicure Studio - Professionele nagelbehandeling" },
	{ src: "/images/about.jpg", alt: "Ons salon - Premium nagelverzorging in Brasschaat" },
	{ src: "/images/nails9.jpg", alt: "Salon Interieur - Moderne en comfortabele omgeving" }
];

// Define all gallery images
const galleryImages = [
	{ src: "/images/nails1.jpg", alt: "Elegant nail design" },
	{ src: "/images/nails2.jpg", alt: "Natural nail care" },
	{ src: "/images/nails3.jpg", alt: "French manicure design" },
	{ src: "/images/nails4.jpg", alt: "Artistic nail art" },
	{ src: "/images/nails5.jpg", alt: "Premium gel nails" },
	{ src: "/images/nails6.jpg", alt: "Professional manicure" },
	{ src: "/images/nails7.jpg", alt: "Creative nail design" },
	{ src: "/images/nails8.jpg", alt: "Modern nail art" },
	{ src: "/images/nails9.jpg", alt: "Luxury nail treatment" }
];

const CallButton = () => (
	<a
		href={`tel:${siteConfig.phone}`}
		className="inline-flex items-center px-6 py-3 bg-black text-white rounded-lg
             hover:bg-gray-800 transition-all duration-300 group"
	>
		<span>Bel Nu</span>
		<Phone className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
	</a>
);

const InstagramButton = () => (
	<a
		href="https://www.instagram.com/nail_noi_salon"
		target="_blank"
		rel="noopener noreferrer"
		className="inline-flex items-center px-6 py-3 bg-white text-black border border-black/10 
				 rounded-lg hover:bg-black/5 transition-all duration-300 group"
	>
		<span>Instagram</span>
		<Instagram className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
	</a>
);

export default function ManicurePage() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const imagesPerView = 3;

	const nextSlide = () => {
		setCurrentIndex((prev) =>
			prev + imagesPerView >= galleryImages.length ? 0 : prev + imagesPerView
		);
	};

	const prevSlide = () => {
		setCurrentIndex((prev) =>
			prev - imagesPerView < 0 ? Math.max(0, galleryImages.length - imagesPerView) : prev - imagesPerView
		);
	};

	return (
		<>
			{/* Hero Section */}
			<section className="py-24" id="hero">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
						<div className="max-w-[560px] space-y-6">
							<div className="space-y-2">
								<h1 className="text-4xl sm:text-6xl font-medium">Noi Manicure</h1>
								<div className="text-lg font-light">Aan huis</div>
							</div>
							<p className="text-lg text-gray-800 mb-8">
								Ervaar nagelverzorging in het hart van {siteConfig.location}. Gespecialiseerd in
								natuurlijke nagelversteviging en artistieke designs met premium producten en technieken.
							</p>
							<div className="flex items-center space-x-4">
								<CallButton />
								<InstagramButton />
							</div>
						</div>
						<div className="max-w-[560px]">
							<div className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-500">
								<ClickableImage
									src="/images/nails1.jpg"
									alt="Noi Manicure Studio - Professionele nagelbehandeling"
									width={560}
									height={560}
									className="w-full"
									priority
									allPageImages={pageImages}
									currentIndex={0}
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="py-24" id="about">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
						<div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-500">
							<ClickableImage
								src="/images/about.jpg"
								alt="Ons salon - Premium nagelverzorging in Brasschaat"
								width={2000}
								height={1}
								className="w-full h-[600px] object-cover"
								allPageImages={pageImages}
								currentIndex={1}
							/>
						</div>
						<div className="space-y-6">
							<h2 className="text-3xl sm:text-4xl font-medium mb-6">
								Uw Premium Nagelverzorging Bestemming
							</h2>
							<div className="space-y-4 text-gray-800">
								<p>
									Bij {siteConfig.businessName} geloof ik in het versterken van uw natuurlijke schoonheid
									door deskundige nagelverzorging. Onze ervaren specialisten zijn gespecialiseerd
									in natuurlijke nagelversteviging, artistieke designs en premium behandelingen.
								</p>
								<p>
									Onze diensten omvatten gelmanicures, signature nail art, natuurlijke nagelverzorging,
									en behandelingen. Ik gebruik alleen premium producten die uw natuurlijke
									nagels beschermen en versterken.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Gallery Section */}
			<section className="py-24" id="images">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="text-center mb-16 space-y-4">
						<h2 className="text-3xl sm:text-4xl font-medium">Galerij</h2>
						<p className="text-gray-800">Ontdek onze laatste werken en nageldesigns</p>
					</div>

					<div className="flex items-center gap-4">
						<button
							onClick={prevSlide}
							className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={currentIndex === 0}
							aria-label="Vorige slide"
						>
							<ChevronLeft className="h-6 w-6" />
						</button>

						<div className="overflow-hidden flex-grow">
							<div
								className="flex transition-transform duration-500 ease-in-out"
								style={{ transform: `translateX(-${currentIndex * (100 / imagesPerView)}%)` }}
							>
								{galleryImages.map((image, index) => (
									<div
										key={index}
										className="sm:flex-[0_0_calc(33.33%-8px)] flex-[0_0_calc(100%-10px)] 
                             min-w-0 mx-1.5 first:ml-0 last:mr-0"
									>
										<div className="block relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg
                                hover:scale-[1.02] transition-all duration-500">
											<ClickableImage
												src={image.src}
												alt={image.alt}
												fill
												className="object-cover"
												allPageImages={galleryImages}
												currentIndex={index}
											/>
										</div>
									</div>
								))}
							</div>
						</div>

						<button
							onClick={nextSlide}
							className="p-2 rounded-lg bg-black/5 hover:bg-black/10 transition-colors
                       disabled:opacity-50 disabled:cursor-not-allowed"
							disabled={currentIndex + imagesPerView >= galleryImages.length}
							aria-label="Volgende slide"
						>
							<ChevronRight className="h-6 w-6" />
						</button>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section className="py-24" id="contact">
				<div className="w-full max-w-screen-xl mx-auto px-8">
					<div className="grid sm:grid-cols-2 grid-cols-1 gap-16 items-center">
						<div className="space-y-12">
							<div>
								<h2 className="text-3xl sm:text-4xl font-medium mb-6">Neem Contact Op</h2>
								<p className="text-gray-800">Ervaar nagelverzorging in {siteConfig.location}</p>
							</div>

							<div className="space-y-8">
								<div className="flex items-center group">
									<MapPin className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
									<div>
										<h3 className="font-medium mb-1">Locatie</h3>
										<a href="https://maps.google.com" target="_blank" rel="noopener noreferrer"
											className="text-gray-800 hover:text-black transition-colors">
											{siteConfig.location}
										</a>
									</div>
								</div>

								<div className="flex items-center group">
									<Phone className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
									<div>
										<h3 className="font-medium mb-1">Telefoon</h3>
										<a href={`tel:${siteConfig.phone}`}
											className="text-gray-800 hover:text-black transition-colors">
											{siteConfig.phone}
										</a>
									</div>
								</div>

								<div className="flex items-center group">
									<Mail className="w-5 h-5 mr-4 text-gray-800 group-hover:text-black transition-colors" />
									<div>
										<h3 className="font-medium mb-1">E-mail</h3>
										<a href={`mailto:${siteConfig.email}`}
											className="text-gray-800 hover:text-black transition-colors">
											{siteConfig.email}
										</a>
									</div>
								</div>
							</div>

							<div>
								<CallButton />
							</div>
						</div>

						<div className="rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-all duration-500">
							<ClickableImage
								src="/images/nails9.jpg"
								alt="Salon Interieur - Moderne en comfortabele omgeving"
								width={800}
								height={800}
								className="w-full h-[600px] object-cover"
								allPageImages={pageImages}
								currentIndex={2}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}